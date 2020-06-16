import calculator from './calculator.js'

test('Check the calculator', () => {
    expect(calculator.add(2,4)).toBe(6);
    expect(calculator.add(12,15)).toBe(27);
    expect(calculator.subtract(12,4)).toBe(8);
    expect(calculator.subtract(10,3)).toBe(7);
    expect(calculator.multiply(5,5)).toBe(25);
    expect(calculator.multiply(10,3)).toBe(30);
    expect(calculator.divide(15,3)).toBe(5);
    expect(calculator.divide(5,5)).toBe(1);
});