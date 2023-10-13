from __future__ import annotations

import csv
import os

from ..pace_chart_class import PaceChart
from ..pace_chart_io import read_nike_csv, save_pace_chart
from ..row_class import Row


def parse_paces_chart_csv_to_json() -> None:
    """Read paces csv file and write to json.

    Read the source data from pace_chart.csv and parse it to a json.
    The keys in the json are the pace values for 10k.
    """
    # Read CSV file.
    header, rows = read_nike_csv()

    pace_chart = PaceChart.from_csv_data(header, rows, metric=False)
    save_pace_chart(pace_chart)


if __name__ == "__main__":
    parse_paces_chart_csv_to_json()
