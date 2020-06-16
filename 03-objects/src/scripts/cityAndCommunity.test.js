
import {City} from './cityAndCommunity.js'
import {Community} from './cityAndCommunity.js'

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

//testing the Community Methods

let testCommunity = new Community ();

test('Does the createCity method work?', () => {
    expect(testCommunity).toEqual({"cities": []});
    testCommunity.createCity("Orlando", 28, 81, 4, 255483);
    console.log(testCommunity);
    expect(testCommunity).toEqual({"cities": [{"name": "Orlando", "lat": 28, "long": 81, "key": 4, "pop": 255483, "currentPop": 255483}]});
    //expect(testObject.key3.howBig()).toBe("N");
});

test('Does the whichSphere method work?', () => {
    console.log(testCommunity.cities[0].lat);
    expect(testCommunity.whichSphere(testCommunity.cities[0].lat)).toBe("This location is in the Northern Hemisphere");
    testCommunity.createCity("Brasilia", -15, 47, 5, 2481000);
    expect(testCommunity.whichSphere(testCommunity.cities[1].lat)).toBe("This location is in the Southern Hemisphere");
    testCommunity.createCity("BadData", "", 72, 6, 5);
    expect(testCommunity.whichSphere("BadData")).toBe("It appears this location is not on planet Earth");
    testCommunity.cities.splice([2], 1);
    // expect(testObject.key2.howBig()).toBe("N");
    // expect(testObject.key3.howBig()).toBe("N");
});

test('Does the getMostNorthern method work?', () => {
    // console.log(testCommunity.cities[0].latitudeSphere);
    expect(testCommunity.getMostNorthern()).toEqual({"currentPop": 255483, "key": 4, "lat": 28, "long": 81, "name": "Orlando", "pop": 255483});
    testCommunity.createCity("Waterloo", 43, 80, 7, 113520);
    expect(testCommunity.getMostNorthern()).toEqual({"currentPop": 113520, "key": 7, "lat": 43, "long": 80, "name": "Waterloo", "pop": 113520});
});

test('Does the getMostSouthern method work?', () => {
    // console.log(testCommunity.cities[0].latitudeSphere);
    expect(testCommunity.getMostSouthern()).toEqual({"currentPop": 2481000, "key": 5, "lat": -15, "long": 47, "name": "Brasilia", "pop": 2481000});
    testCommunity.createCity("Santiago", -33, 70, 8, 6724000);
    expect(testCommunity.getMostSouthern()).toEqual({"currentPop": 6724000, "key": 8, "lat": -33, "long": 70, "name": "Santiago", "pop": 6724000});
});

test('Does the getPopulation method work?', () => {
    // console.log(testCommunity.cities[0].latitudeSphere);
    expect(testCommunity.getPopulation(testCommunity)).toBe(9574003);
});
