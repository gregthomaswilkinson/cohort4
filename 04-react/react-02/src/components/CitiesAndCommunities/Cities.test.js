
import City from './Cities.js'


let testObject = {};
//testArray.push(new City(Name, Latitude, Longitude, Population));
testObject.key1 = (new City("Aberdeen", 57, 2, 1, 241013));
testObject.key2 = (new City("Berlin", 52, 13, 2, 3748000));
console.log(testObject);
console.log(testObject.key1.lat)



//testing the city methods
test('Does the show method work?', () => {
    expect(testObject.key1.show(testObject)).toEqual("Aberdeen city has a latitude of 57 a longitude of 2 and has a population of 241013");
    expect(testObject.key2.show(testObject)).toEqual("Berlin city has a latitude of 52 a longitude of 13 and has a population of 3748000");
});

test('Does the movedIn method work?', () => {
    expect(testObject.key1.movedIn(5)).toBe(241018);

});

test('Does the movedOut method work?', () => {
    expect(testObject.key1.movedOut(5)).toBe(241013);
    // expect(testObject.key2.movedOut(2)).toBe(3748000);
});

test('Does the howBig method work?', () => {
    expect(testObject.key1.howBig(testObject.key1.currentPop)).toBe("City");
    expect(testObject.key2.howBig(testObject.key2.currentPop)).toBe("City");
    testObject.key3 = (new City("Bolo", 8, 39, 3, 1157));
    expect(testObject.key3.howBig(testObject.key3.currentPop)).toBe("Town");
});

test('Does the whichSphere method work?', () => {
    expect(testObject.key1.whichSphere(testObject.key1.lat)).toBe("This location is in the Northern Hemisphere");
    expect(testObject.key2.whichSphere(testObject.key2.lat)).toBe("This location is in the Northern Hemisphere");
});
