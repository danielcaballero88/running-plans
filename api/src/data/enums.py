from __future__ import annotations

from enum import Enum


class TimeKind(str, Enum):
    TOTAL = "total"
    PACE = "pace"

    @classmethod
    def get_by_value(cls, val: str) -> TimeKind:
        return {
            "total": cls.TOTAL,
            "pace": cls.PACE,
        }[val]


class Distance(str, Enum):
    MILE = "mile"
    _5K = "5k"
    _10K = "10k"
    TEMPO = "tempo"
    HALF_MARATHON = "half_marathon"
    MARATHON = "marathon"

    @classmethod
    def get_by_value(cls, val: str) -> Distance:
        return {
            "mile": cls.MILE,
            "5k": cls._5K,
            "10k": cls._10K,
            "tempo": cls.TEMPO,
            "half_marathon": cls.HALF_MARATHON,
            "marathon": cls.MARATHON,
        }[val]


DISTANCE_VALUES = {
    Distance.MILE: 1.609344,
    Distance._5K: 5.0,
    Distance._10K: 10.0,
    Distance.HALF_MARATHON: 21.0,
    Distance.MARATHON: 42.195,
}
