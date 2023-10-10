import unittest

from src.paces import Paces, KnownInput
from src.data.scripts.parse_to_json import Distance, TimeKind, Time

class TestPaces(unittest.TestCase):

    def setUp(self):
        self.paces_instance = ...

    def test_input_parsing(self):
        paces = Paces({
            "distance": "5k",
            "time_kind": "pace",
            "time_value": "33:18",
        })
        assert isinstance(paces.known_input, KnownInput)
        assert paces.known_input.distance == Distance._5K
        assert paces.known_input.time_kind == TimeKind.PACE
        assert isinstance(paces.known_input.time_value, Time)
        assert paces.known_input.time_value == Time(0, 33, 18)
