import Community from './Communities.js'



//testing the Community Methods

let testCommunity = new Community ();

test('Does the createCity method work?', () => {
    expect(testCommunity).toEqual({"cities": []});
    testCommunity.createCity("Orlando", 28, 81, 4, 255483);
    expect(testCommunity).toEqual({"cities": [{"name": "Orlando", "lat": 28, "long": 81, "key": 4, "pop": 255483}]});
    testCommunity.createCity("Brasilia", -15, 47, 5, 2481000);
    //expect(testObject.key3.howBig()).toBe("N");
});

// THIS METHOD SEEMED LIKE IT SHOULD HAVE BEEN APART OF THE CITIES SO I MOVED IT INTO THE CITIES CLASS

// test('Does the whichSphere method work?', () => {
    // expect(testCommunity.whichSphere(testCommunity.cities[0].lat)).toBe("This location is in the Northern Hemisphere");
    // expect(testCommunity.whichSphere(testCommunity.cities[1].lat)).toBe("This location is in the Southern Hemisphere");
    // expect(testCommunity.whichSphere("BadData")).toBe("It appears this location is not on planet Earth");
    // testCommunity.cities.splice([2], 1);
    // expect(testObject.key2.howBig()).toBe("N");
    // expect(testObject.key3.howBig()).toBe("N");
// });



test('Does the getMostNorthern method work?', () => {
    // console.log(testCommunity.cities[0].latitudeSphere);
    expect(testCommunity.getMostNorthern()).toEqual({"key": 4, "lat": 28, "long": 81, "name": "Orlando", "pop": 255483});
    testCommunity.createCity("Waterloo", 43, 80, 7, 113520);
    expect(testCommunity.getMostNorthern()).toEqual({"key": 7, "lat": 43, "long": 80, "name": "Waterloo", "pop": 113520});
});

test('Does the getMostSouthern method work?', () => {
    // console.log(testCommunity.cities[0].latitudeSphere);
    expect(testCommunity.getMostSouthern()).toEqual({"key": 5, "lat": -15, "long": 47, "name": "Brasilia", "pop": 2481000});
    testCommunity.createCity("Santiago", -33, 70, 8, 6724000);
    expect(testCommunity.getMostSouthern()).toEqual({"key": 8, "lat": -33, "long": 70, "name": "Santiago", "pop": 6724000});
});

test('Does the getPopulation method work?', () => {
    // console.log(testCommunity.cities[0].latitudeSphere);
    expect(testCommunity.getPopulation()).toBe(9574003);
});