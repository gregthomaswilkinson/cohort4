import workingwitharrays from './workingwitharrays.js'

let newValue = 6
let array = [5,6,7];
let total = 0;

test('Check the array', () => {
    
    // expect(functions.size(10)).toBe("medium");
    expect(workingwitharrays.addButton(newValue, array)).toStrictEqual([5, 6, 7, 6]);
    // expect(functions.size(20)).toBe("large");
    expect(workingwitharrays.showTotal(array, total)).toBe(24);
    // expect(functions.size(101)).toBe("extra large");

});

