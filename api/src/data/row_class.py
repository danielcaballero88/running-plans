from __future__ import annotations

from .enums import DISTANCE_VALUES, Distance, TimeKind
from .time_class import Time

OneDistanceTimes = dict[TimeKind, Time]
OneDistanceTimesJSON = dict[str, str]

RowDict = dict[Distance, OneDistanceTimes]
RowDictJSON = dict[str, OneDistanceTimesJSON]


class Row:
    """A row in the running times table."""

    mile_to_km = DISTANCE_VALUES[Distance.MILE]

    def __init__(self) -> None:
        """Row of times from Nike Run Club pace chart."""
        # Input times is in the format of the Nike Run Club pace chart.
        self.data: RowDict = {}

    @classmethod
    def from_nike_csv_row(cls, *values: str) -> Row:
        instance = cls()
        instance.data = instance.parse_nike_raw_values(*values)
        return instance

    def parse_nike_raw_values(self, *values: str) -> RowDict:
        """Parse input times into a structured dict.

        Nike values are given as a list of values (coming from a csv
        row) with paces per mile. Values are here converted to metric
        (meaning paces per km).

        Parameters:
            *values: strings representing the times in a row of the
                source csv data. Each string is in the format "mm:ss" or
                "hh:mm:ss".

        Example of self.data after parsing:
            {
                "mile": {
                    "total": "<Time 00:05:00>",
                    "pace": "<Time 00:03:06>"
                },
                "5k": {
                    "total": "<Time 00:17:05>",
                    "pace": "<Time 00:03:25>"
                },
                "10k": {
                    "total": "<Time 00:35:45>",
                    "pace": "<Time 00:03:34>"
                },
                "tempo": {
                    "pace": "<Time 00:03:46>"
                },
                "half_marathon": {
                    "total": "<Time 01:18:00>",
                    "pace": "<Time 00:03:43>"
                },
                "marathon": {
                    "total": "<Time 02:44:00>",
                    "pace": "<Time 00:03:53>"
                },
                "recovery: {
                    "pace": "<Time ...>"
                },
            }
        """
        # Input times is in the format of the Nike Run Club pace chart.
        parsed_values_per_mile: RowDict = {
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
            Distance.RECOVERY: {
                TimeKind.PACE: Time.from_str(values[10]),
            },
        }
        parsed_values_per_km = self.compute_metric(
            input_data=parsed_values_per_mile, input_is_metric=False
        )
        return parsed_values_per_km

    def compute_metric(self, input_data: RowDict, input_is_metric: bool) -> RowDict:
        """Compute the metric pace values.

        The input data can be given in metric system, if so this
        function returns the same data. But if the input is given in
        imperial format (pace per mile) then it transforms the pace to
        be per kilometer.
        """
        # Initialize result.
        metric_data: RowDict = {}
        metric_data = {**input_data}

        # Regardless of input data, compute the mile pace per km,
        # because this value is nor provided either way.
        metric_data[Distance.MILE][TimeKind.PACE] = (
            metric_data[Distance.MILE][TimeKind.TOTAL] / self.mile_to_km
        )
        # Compute the missing pace for mile
        if input_is_metric:
            # input data was given in metric units, so the pace values
            # are already per kilometer.
            return metric_data

        # else: the input data was given in imperial units and so the
        # pace values need to be converted from "per mile" to "per km".
        metric_data[Distance._5K][TimeKind.PACE] = (
            metric_data[Distance._5K][TimeKind.PACE] / self.mile_to_km
        )
        metric_data[Distance._10K][TimeKind.PACE] = (
            metric_data[Distance._10K][TimeKind.PACE] / self.mile_to_km
        )
        metric_data[Distance.TEMPO][TimeKind.PACE] = (
            metric_data[Distance.TEMPO][TimeKind.PACE] / self.mile_to_km
        )
        metric_data[Distance.HALF_MARATHON][TimeKind.PACE] = (
            metric_data[Distance.HALF_MARATHON][TimeKind.PACE] / self.mile_to_km
        )
        metric_data[Distance.MARATHON][TimeKind.PACE] = (
            metric_data[Distance.MARATHON][TimeKind.PACE] / self.mile_to_km
        )
        metric_data[Distance.RECOVERY][TimeKind.PACE] = (
            metric_data[Distance.RECOVERY][TimeKind.PACE] / self.mile_to_km
        )
        return metric_data

    def to_json(self) -> RowDictJSON:
        data_json: RowDictJSON = {}
        for distance, times in self.data.items():
            data_json[distance] = {}
            for time_kind, time_val in times.items():
                data_json[distance.value][time_kind.value] = str(time_val)
        return data_json

    @classmethod
    def from_json(cls, row_dict: dict) -> Row:
        data: RowDict = {}
        for distance_str, times_dict in row_dict.items():
            distance = Distance.get_by_value(distance_str)
            data[distance] = {}
            for time_kind_str, time_str in times_dict.items():
                time_kind = TimeKind.get_by_value(time_kind_str)
                time_obj = Time.from_str(time_str)
                data[distance][time_kind] = time_obj

        instance = cls()
        instance.data = data
        return instance

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
