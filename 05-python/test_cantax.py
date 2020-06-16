import cantax
import pytest

def test_CalculatedTax():
    assert cantax.calculate_tax(1) == 0.15
    assert cantax.calculate_tax(48535) == 7280.25
    assert cantax.calculate_tax(97069) == 17229.72
    assert cantax.calculate_tax(123567) == 24119.20
    assert cantax.calculate_tax(150473) == 31114.760000000002
    assert cantax.calculate_tax(208342) == 47896.77
    assert cantax.calculate_tax(214368) == 49644.31
    assert cantax.calculate_tax(340000) == 91102.87
