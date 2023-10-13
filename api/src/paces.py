import os

from pydantic import BaseModel, field_validator

from .data.enums import DISTANCE_VALUES, Distance, TimeKind
from .data.pace_chart_class import PaceChart
from .data.row_class import Row
from .data.time_class import Time

HERE = os.path.dirname(__file__)
DATA_DIR = os.path.join(HERE, "data")
DATA_FILE = os.path.join(DATA_DIR, "pace_chart.json")


class KnownInput(BaseModel):
    class Config:
        arbitrary_types_allowed = True

    distance: Distance
    time_kind: TimeKind
    time_value: Time

    @field_validator("distance", mode="before")
    @classmethod
    def parse_distance(cls, val: str) -> Distance:
        return Distance.get_by_value(val)

    @field_validator("time_kind", mode="before")
    @classmethod
    def parse_time_kind(cls, val: str) -> TimeKind:
        return TimeKind.get_by_value(val)

    @field_validator("time_value", mode="before")
    @classmethod
    def parse_time_value(cls, val: str) -> Time:
        return Time.from_str(val)


class Paces:
    """Class to manage the running paces of a person.

    The paces are fetched from the json file in data/pace_chart.json
    according to the person input, which can be different depending on
    their knowledge. For example, if the person knows that they run 5k
    in 30min then that is used, if they know they run 10k in 50min that
    is used, etc.
    """

    def __init__(self, known_input_raw: dict) -> None:
        self.pace_chart = PaceChart.from_file(DATA_FILE)
        # Get the data from the chart using the given pace, rounding up.
        self.known_input = KnownInput(**known_input_raw)

    def get_paces_for_given_input(
        self, distance: Distance, time_kind: TimeKind, time_value: Time
    ) -> Row:
        """Get the dict of paces for a given known input."""
        # Get the corresponding index for the input distance
        if time_kind == TimeKind.PACE:
            input_pace = time_value
        elif time_kind == TimeKind.TOTAL:
            input_pace = time_value / DISTANCE_VALUES[distance]
        index = self.pace_chart.indexes[distance]
        # Get the pace immediately slower than the given
        # Sort in increasing order (faster -> slower).
        index_paces = sorted(list(index.keys()))
        selected_pace = next(pace for pace in index_paces if pace > input_pace)
        # Get the correct dict of paces (distance -> pace) for the selected pace.
        selected_10k_pace = index[selected_pace]
        paces = self.pace_chart.data[selected_10k_pace]
        # Done.
        return paces


if __name__ == "__main__":
    paces = Paces(
        {
            "distance": "5k",
            "time_kind": "pace",
            "time_value": "33:18",
        }
    )
    print(paces.known_input)
