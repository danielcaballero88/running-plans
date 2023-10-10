from __future__ import annotations


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

    def __eq__(self, another):
        if not isinstance(another, Time):
            raise TypeError("Cannot compare Time instance with another type.")
        return str(self) == str(another)

    def __str__(self):
        return f"{self.hour:02d}:{self.min:02d}:{self.sec:02d}"

    def __repr__(self):
        return f"<Time {self.hour:02d}:{self.min:02d}:{self.sec:02d}>"
