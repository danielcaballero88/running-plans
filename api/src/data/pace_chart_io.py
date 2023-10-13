import csv
import os

from .pace_chart_class import PaceChart

HERE = os.path.dirname(__file__)
DATA_FILE = os.path.join(HERE, "pace_chart.json")


def read_nike_csv() -> tuple[list[str], list[list[str]]]:
    # Read CSV file.
    rows: list[list[str]] = []
    with open(os.path.join(HERE, "pace_chart.csv"), "r") as csv_file:
        spamreader = csv.reader(csv_file)
        for row in spamreader:
            rows.append(row)
    header = rows[0]
    rows = rows[1:]
    return header, rows


def save_pace_chart(pace_chart: PaceChart) -> None:
    pace_chart.to_file(DATA_FILE)


def get_pace_chart() -> PaceChart:
    return PaceChart.from_file(DATA_FILE)
