from __future__ import annotations

import csv
import json
import os
from typing import cast
from enum import Enum


HERE = os.path.dirname(__file__)
DATA_DIR = os.path.dirname(HERE)


class Time:
    """Class to work with running times."""

    def __init__(self, hour: int, min: int, sec: int):
        self.hour = hour
        self.min = min
        self.sec = sec

    @classmethod
    def from_str(cls, hour_min_sec_str: str) -> Time:
        """Read string into Time instance.

        Example:
            >>> Time.from_str("31:45")
            >>> <Time 00:31:45>

            >>> Time.from_str("5:15:00")
            >>> <Time 05:15:00>
        """
        splitted = hour_min_sec_str.split(":")
        if len(splitted) == 2:
            hour = 0
            min = int(splitted[0])
            sec = int(splitted[1])
        elif len(splitted) == 3:
            hour = int(splitted[0])
            min = int(splitted[1])
            sec = int(splitted[2])
        else:
            raise ValueError(
                "Wrong number of values splitted by ':' in '%s'", hour_min_sec_str
            )
        instance = cls(hour, min, sec)
        return instance

    def __truediv__(self, other: int | float) -> Time:
        """Division of Time object by a number.

        Transforms time to seconds, performs division and parses back
        into Time object before returning.
        """
        if not isinstance(other, (int, float)):
            other_type = type(other)
            raise TypeError(f"Cannot divide Time object by type {other_type}")

        total_sec = self.sec + self.min * 60 + self.hour * 3600
        result_total_sec = int(total_sec // other)
        result_hour = result_total_sec // 3600
        leftover_sec = result_total_sec % 3600
        result_min = leftover_sec // 60
        result_sec = leftover_sec % 60
        return Time(result_hour, result_min, result_sec)

    def __str__(self):
        return f"{self.hour:02d}:{self.min:02d}:{self.sec:02d}"

    def __repr__(self):
        return f"<Time {self.hour:02d}:{self.min:02d}:{self.sec:02d}>"


class TimeKind(str, Enum):
    TOTAL = "total"
    PACE = "pace"


class Distance(str, Enum):
    MILE = "mile"
    _5K = "5k"
    _10K = "10k"
    TEMPO = "tempo"
    HALF_MARATHON = "half_marathon"
    MARATHON = "marathon"


OneDistanceTimes = dict[TimeKind, Time]
OneDistanceTimesJSON = dict[TimeKind, str]

RowDict = dict[Distance, OneDistanceTimes]
RowDictJSON = dict[Distance, OneDistanceTimesJSON]


class Row:
    """A row in the running times table."""

    mile_to_km = 1.609344

    def __init__(self, *values: str, metric: bool) -> None:
        """Parse input times into a structured dict.

        The values can be given in imperial or metric format. Imperial
        means that the pace for each distance is calculated per mile,
        and metric per kilometer. No mather what is given, the final
        values are stored in metric system.

        Parameters:
            *values: strings representing the times in a row of the
                source csv data. Each string is in the format "mm:ss" or
                "hh:mm:ss".
            metric: boolean indicating if the values are provided in
                metric system (meaning pace is time per km) or imperial
                (meaning pace is time per mile). For values of total
                time to complete a distance, it makes no difference.

        Example of self.data after parsing:
            {
                "mile": {
                    "best": "<Time 00:05:00>",
                    "avg": "<Time 00:03:06>"
                },
                    "5k": {
                    "best": "<Time 00:17:05>",
                    "avg": "<Time 00:03:25>"
                },
                    "10k": {
                    "best": "<Time 00:35:45>",
                    "avg": "<Time 00:03:34>"
                },
                    "tempo": {
                    "avg": "<Time 00:03:46>"
                },
                    "half_marathon": {
                    "best": "<Time 01:18:00>",
                    "avg": "<Time 00:03:43>"
                },
                    "marathon": {
                    "best": "<Time 02:44:00>",
                    "avg": "<Time 00:03:53>"
                }
            }
        """
        _input_times = {
            Distance.MILE: {
                TimeKind.TOTAL: Time.from_str(values[0]),
            },
            Distance._5K: {
                TimeKind.TOTAL: Time.from_str(values[1]),
                TimeKind.PACE: Time.from_str(values[2]),
            },
            Distance._10K: {
                TimeKind.TOTAL: Time.from_str(values[3]),
                TimeKind.PACE: Time.from_str(values[4]),
            },
            Distance.TEMPO: {
                TimeKind.PACE: Time.from_str(values[5]),
            },
            Distance.HALF_MARATHON: {
                TimeKind.TOTAL: Time.from_str(values[6]),
                TimeKind.PACE: Time.from_str(values[7]),
            },
            Distance.MARATHON: {
                TimeKind.TOTAL: Time.from_str(values[8]),
                TimeKind.PACE: Time.from_str(values[9]),
            },
        }
        self.__input_times = cast(RowDict, _input_times)
        self.__input_metric = metric
        self.data = self.compute_metric(self.__input_times)

    def compute_metric(self, input_data: RowDict) -> RowDict:
        """Compute the metric pace values.

        The input data can be given in metric system, if so this
        function returns the same data. But if the input is given in
        imperial format (pace per mile) then it transforms the pace to
        be per kilometer.
        """
        if self.__input_metric:
            return input_data
        # fmt: off
        metric_data: RowDict = {}
        metric_data[Distance.MILE] = {}
        metric_data[Distance.MILE][TimeKind.TOTAL] = input_data[Distance.MILE][TimeKind.TOTAL]
        metric_data[Distance.MILE][TimeKind.PACE] = input_data[Distance.MILE][TimeKind.TOTAL] / self.mile_to_km
        metric_data[Distance._5K] = {}
        metric_data[Distance._5K][TimeKind.TOTAL] = input_data[Distance._5K][TimeKind.TOTAL]
        metric_data[Distance._5K][TimeKind.PACE] = input_data[Distance._5K][TimeKind.PACE] / self.mile_to_km
        metric_data[Distance._10K] = {}
        metric_data[Distance._10K][TimeKind.TOTAL] = input_data[Distance._10K][TimeKind.TOTAL]
        metric_data[Distance._10K][TimeKind.PACE] = input_data[Distance._10K][TimeKind.PACE] / self.mile_to_km
        metric_data[Distance.TEMPO] = {}
        metric_data[Distance.TEMPO][TimeKind.PACE] = input_data[Distance.TEMPO][TimeKind.PACE] / self.mile_to_km
        metric_data[Distance.HALF_MARATHON] = {}
        metric_data[Distance.HALF_MARATHON][TimeKind.TOTAL] = input_data[Distance.HALF_MARATHON][TimeKind.TOTAL]
        metric_data[Distance.HALF_MARATHON][TimeKind.PACE] = input_data[Distance.HALF_MARATHON][TimeKind.PACE] / self.mile_to_km
        metric_data[Distance.MARATHON] = {}
        metric_data[Distance.MARATHON][TimeKind.TOTAL] = input_data[Distance.MARATHON][TimeKind.TOTAL]
        metric_data[Distance.MARATHON][TimeKind.PACE] = input_data[Distance.MARATHON][TimeKind.PACE] / self.mile_to_km
        # fmt: on
        return metric_data

    def to_json(self) -> RowDictJSON:
        data_json: RowDictJSON = {}
        for distance, times in self.data.items():
            data_json[distance] = {}
            for time_kind, time_val in times.items():
                data_json[distance][time_kind] = str(time_val)
        return data_json

    def __getitem__(self, key):
        return self.data[key]

    def __str__(self):
        times = {}
        for key in self.data:
            if "best" in self.data[key]:
                times[key + "_best"] = self.data[key]["best"]
            if "avg" in self.data[key]:
                times[key + "_avg"] = self.data[key]["avg"]
        return f"<Row for mile time {self['mile']['best']}: {times}"

    def __repr__(self):
        return self.__str__()


PaceChartDict = dict[str, Row]
PaceChartDictJSON = dict[str, RowDictJSON]


class PaceChart:
    def __init__(
        self, csv_header: list[str], csv_rows: list[list[str]], metric: bool
    ) -> None:
        """Init a PaceChart instance."""
        self.data: PaceChartDict = {}
        for row in csv_rows:
            row_obj = Row(*row, metric=False)
            pace_10k = row_obj.data[Distance._10K][TimeKind.PACE]
            self.data[str(pace_10k)] = row_obj
        self.data_json = self.to_json()

    def to_json(self) -> PaceChartDictJSON:
        data_json: PaceChartDictJSON = {}
        for pace_str, row_obj in self.data.items():
            data_json[pace_str] = row_obj.to_json()
        return data_json

    def to_file(self, file_path) -> None:
        with open(file_path, "w") as json_file:
            json.dump(self.data_json, json_file, indent=2)


def main() -> None:
    """Main function of the script.

    Read the source data from pace_chart.csv and parse it to a json.
    The keys in the json are the pace values for 10k.
    """
    # Read CSV file.
    rows: list[list[str]] = []
    with open(os.path.join(DATA_DIR, "pace_chart.csv"), "r") as csv_file:
        spamreader = csv.reader(csv_file)
        data: dict[str, Row] = {}
        for row in spamreader:
            rows.append(row)
    header = rows[0]
    rows = rows[1:]

    pace_chart = PaceChart(header, rows, metric=False)
    pace_chart.to_file(os.path.join(DATA_DIR, "pace_chart.json"))


if __name__ == "__main__":
    main()
