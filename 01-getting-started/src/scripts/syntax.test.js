import testSyntax from './syntax'

test('Check to see if its a number', () => {
    expect(testSyntax.isNumber(20)).toBe(true);
    expect(testSyntax.isNumber(80)).toBe(true);
    expect(testSyntax.isNumber("Hellllooooo")).toBe(false);
});

test('Check to see if its a string', () => {
    expect(testSyntax.isString(20)).toBe(false);
    expect(testSyntax.isString("helllooooo")).toBe(true);
});

test('Check to see if its a Boolean', () => {
    expect(testSyntax.isBoolean(false)).toBe(true);
    expect(testSyntax.isBoolean(true)).toBe(true);
    expect(testSyntax.isBoolean(24)).toBe(false);
});

test('Check to see if its an Array', () => {
    expect(testSyntax.isArray([20,"I'm part of an array","Dog",true])).toBe(true);
    expect(testSyntax.isArray("helllooooo")).toBe(false);
});

test('Check to see if its an Object', () => {
    expect(testSyntax.isObject({age: 27}, {type: "human"}, {password: 123456})).toBe(true);
    expect(testSyntax.isObject("helllooooo")).toBe(false);
    expect(testSyntax.isObject([20,"I'm part of an array","Dog",true])).toBe(false);
});

test('Check to see if its Undefined', () => {
    expect(testSyntax.isUndefined(undefined)).toBe(true);
    expect(testSyntax.isUndefined("helllooooo")).toBe(false);
    //expect(testSyntax.isUndefined(a)).toBe(true);
});

test('Check the if else statement', () => {
    expect(testSyntax.parkOrGame("Raining")).toBe("Time to stay indoor and play video games");
    expect(testSyntax.parkOrGame("Snowing")).toBe("I should get out for a walk");
    expect(testSyntax.parkOrGame("Sunny")).toBe("I should get out for a walk");
    expect(testSyntax.parkOrGame("Overcast")).toBe("I should get out for a walk");
});

test('Check the Function Functionality', () => {
    expect(testSyntax.ModifyArray([20,"I'm part of an array","Dog",true])).toBe(
    "the values are different because we pushed a new value to the front of the array");
});

//LOOP TESTS
test('Check the ForLoop Functionality', () => {
    expect(testSyntax.ForLoop(2)).toBe(12);
    expect(testSyntax.ForLoop(3)).toBe(13);

});
test('Check the ForInLoop Functionality', () => {
    let password = "";
    expect(testSyntax.ForInLoop({age: 27, name: "Franklin", password: "pass"})).toBe("password");

});
test('Check the WhileLoop Functionality', () => {
    expect(testSyntax.WhileLoop(0)).toBe(6);

});
test('Check the DoWhileLoop Functionality', () => {
    expect(testSyntax.DoWhileLoop(1)).toBe(11);

});
test('Check the ForEachLoop Functionality', () => {
    expect(testSyntax.ForEachLoop([2, 27, 34, 10])).toBe(10);

});
test('Check the Object lookup value Functionality', () => {
    expect(testSyntax.ObjectLookup({age: 27, name: "Franklin", password: "pass"})).toEqual(["age", "name", "password"]);

});
