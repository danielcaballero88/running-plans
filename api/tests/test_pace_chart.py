import unittest

from src.data.enums import Distance, TimeKind
from src.data.pace_chart_class import PaceChart
from src.data.pace_chart_io import get_pace_chart
from src.data.row_class import Row
from src.data.time_class import Time


class TestPaceChart(unittest.TestCase):
    def setUp(self) -> None:
        self.pace_chart: PaceChart = get_pace_chart()

    def test_properties_types(self):
        assert hasattr(self.pace_chart, "data")
        assert hasattr(self.pace_chart, "data_json")
        assert hasattr(self.pace_chart, "indexes")
        assert hasattr(self.pace_chart, "indexes_json")

    def test_data_types(self):
        for pace_10k, row_obj in self.pace_chart.data.items():
            assert isinstance(pace_10k, Time)
            assert isinstance(row_obj, Row)
            for distance, times_dict in row_obj.data.items():
                assert isinstance(distance, Distance)
                for time_kind, time_val in times_dict.items():
                    assert isinstance(time_kind, TimeKind)
                    assert isinstance(time_val, Time)

    def test_data_json_types(self):
        for pace_10k_str, row_dict_json in self.pace_chart.data_json.items():
            assert isinstance(pace_10k_str, str)
            assert isinstance(row_dict_json, dict)
            for distance_str, times_dict in row_dict_json.items():
                assert isinstance(distance_str, str)
                for time_kind_str, time_str in times_dict.items():
                    assert isinstance(time_kind_str, str)
                    assert isinstance(time_str, str)

    def test_indexes_types(self):
        for distance, pace_mapping in self.pace_chart.indexes.items():
            assert isinstance(distance, Distance)
            assert isinstance(pace_mapping, dict)
            for pace, pace_10k in pace_mapping.items():
                assert isinstance(pace, Time)
                assert isinstance(pace_10k, Time)

    def test_indexes_json_types(self):
        for distance, pace_mapping in self.pace_chart.indexes_json.items():
            assert isinstance(distance, str)
            assert isinstance(pace_mapping, dict)
            for pace, pace_10k in pace_mapping.items():
                assert isinstance(pace, str)
                assert isinstance(pace_10k, str)
