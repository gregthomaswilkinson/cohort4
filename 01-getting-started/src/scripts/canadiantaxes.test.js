import canadianTaxes from "./canadiantaxes";


test('Does the calculate tax function work?', () => {
    expect(canadianTaxes.calculateIncome(1)).toBe(0.15);
    expect(canadianTaxes.calculateIncome(48535)).toBe(7280.25);
    expect(canadianTaxes.calculateIncome(97069)).toBe(17229.72);
    expect(canadianTaxes.calculateIncome(123567)).toBe(24119.20);
    expect(canadianTaxes.calculateIncome(150473)).toBe(31114.760000000002);
    expect(canadianTaxes.calculateIncome(208342)).toBe(47896.77);
    expect(canadianTaxes.calculateIncome(214368)).toBe(49644.31);
    expect(canadianTaxes.calculateIncome(340000)).toBe(91102.87);
});