import json
import os

HERE = os.path.dirname(__file__)


def get_pace_chart() -> dict:
    filepath = os.path.join(HERE, "pace_chart.json")
    with open(filepath, "r", encoding="utf-8") as json_file:
        data: dict = json.load(json_file)
    return data
