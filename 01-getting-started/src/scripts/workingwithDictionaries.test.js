import workingWithDictionaries from './workingwithDictionaries.js'

let provinces = {AB: "Alberta", BC: "British Columbia", SK: "Sasktachewan",
QC: "Quebec", NB: "New Brunswick", MB: "Manitoba", NL: "Newfoundland and Labrador",
PE: "Prince Edward Island", NS: "Nova Scotia", ON: "Ontario", NT: "Northwest Territories",
YT: "Yukon", NU: "Nunavut"};

test('Check the array', () => {
    expect(workingWithDictionaries.checkDictionary(provinces, "AB")).toBe("Alberta");
    expect(workingWithDictionaries.checkDictionary(provinces, "QC")).toBe("Quebec");
});