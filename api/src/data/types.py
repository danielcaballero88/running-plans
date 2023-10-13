from .enums import Distance, TimeKind
from .row_class import Row
from .time_class import Time

OneDistanceTimes = dict[TimeKind, Time]
OneDistanceTimesJSON = dict[TimeKind, str]

RowDict = dict[Distance, OneDistanceTimes]
RowDictJSON = dict[Distance, OneDistanceTimesJSON]

PaceChartDict = dict[Time, Row]
PaceChartDictJSON = dict[str, RowDictJSON]

IndexesDict = dict[Distance, dict[Time, Time]]
IndexesDictJSON = dict[str, dict[str, str]]
