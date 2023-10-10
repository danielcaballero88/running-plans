from pydantic import BaseModel, field_validator

from .data.enums import Distance, TimeKind
from .data.get_pace_chart import get_pace_chart
from .data.time_class import Time


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
        self.pace_chart_data = get_pace_chart()
        # Get the data from the chart using the given pace, rounding up.
        self.known_input = KnownInput(**known_input_raw)


if __name__ == "__main__":
    paces = Paces(
        {
            "distance": "5k",
            "time_kind": "pace",
            "time_value": "33:18",
        }
    )
    print(paces.known_input)
