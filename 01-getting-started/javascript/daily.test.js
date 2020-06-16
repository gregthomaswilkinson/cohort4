import functions from './daily.js'

test('Check the daily excersize', () => {
    expect(functions.convertToFarenheit(0)).toBe(32);
    expect(functions.convertToFarenheit(100)).toBe(212)
});