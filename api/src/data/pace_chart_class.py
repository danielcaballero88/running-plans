from __future__ import annotations

import json

from .enums import Distance, TimeKind
from .row_class import Row
from .time_class import Time
from .types import IndexesDict, IndexesDictJSON, PaceChartDict, PaceChartDictJSON


class PaceChart:
    def __init__(self) -> None:
        """Init a PaceChart instance."""
        self.data: PaceChartDict = {}
        self.data_json: PaceChartDictJSON = {}
        self.indexes: IndexesDict = {}
        self.indexes_json: IndexesDictJSON = {}

    @classmethod
    def from_csv_data(
        cls, csv_header: list[str], csv_rows: list[list[str]], metric: bool
    ) -> PaceChart:
        """Init a PaceChart instance."""
        instance = PaceChart()
        for row in csv_rows:
            row_obj = Row.from_nike_csv_row(*row)
            pace_10k = row_obj.data[Distance._10K][TimeKind.PACE]
            instance.data[pace_10k] = row_obj

        instance.indexes = instance.compute_indexes()

        instance.data_json, instance.indexes_json = instance.to_json()

        return instance

    def compute_indexes(self) -> IndexesDict:
        """Write indexes for the rows.

        Each index points from a distance pace to the 10k pace, that
        way knowing the pace for any distance it's possible to fetch all
        the row info for it without having to go over all the objects.
        """
        indexes: IndexesDict = {}
        for pace_10k, row_obj in self.data.items():
            for distance, times in row_obj.data.items():
                if distance not in indexes:
                    indexes[distance] = {}
                indexes[distance][times[TimeKind.PACE]] = pace_10k

        return indexes

    def to_json(self) -> tuple[PaceChartDictJSON, IndexesDictJSON]:
        data_json: PaceChartDictJSON = {}
        for pace, row_obj in self.data.items():
            data_json[str(pace)] = row_obj.to_json()

        indexes_json: IndexesDictJSON = {}
        for distance, index in self.indexes.items():
            distance_str = distance.value
            indexes_json[distance_str] = {}
            for distance_total, pace_10k in index.items():
                distance_total_str = str(distance_total)
                pace_10k_str = str(pace_10k)
                indexes_json[distance_str][distance_total_str] = pace_10k_str

        return data_json, indexes_json

    def to_file(self, file_path) -> None:
        """Write data and indexes to file."""
        file_data = {
            "data": self.data_json,
            "indexes": self.indexes_json,
        }
        with open(file_path, "w") as json_file:
            json.dump(file_data, json_file, indent=2)

    @classmethod
    def from_file(cls, file_path: str) -> PaceChart:
        """Read file and create PaceChart instance."""
        with open(file_path, "r", encoding="utf-8") as json_file:
            raw_data = json.load(json_file)

        data_json: PaceChartDictJSON = raw_data["data"]
        data: PaceChartDict = {}
        for pace_10k_str, row_json in data_json.items():
            pace_10k = Time.from_str(pace_10k_str)
            row_obj = Row.from_json(row_json)
            data[pace_10k] = row_obj

        indexes_json: IndexesDictJSON = raw_data["indexes"]
        indexes: IndexesDict = {}
        for distance_str, index_json in indexes_json.items():
            distance = Distance.get_by_value(distance_str)
            indexes[distance] = {}
            for pace_str, pace_10k_str in index_json.items():
                pace = Time.from_str(pace_str)
                pace_10k = Time.from_str(pace_10k_str)
                indexes[distance][pace] = pace_10k

        pace_chart = PaceChart()
        pace_chart.data = data
        pace_chart.data_json = data_json
        pace_chart.indexes = indexes
        pace_chart.indexes_json = indexes_json
        return pace_chart
