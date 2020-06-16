import AccountController from './accounts.js'

let testArray = [];
testArray.push(new AccountController("savings", 500));
testArray.push(new AccountController("orca fund", 200));
testArray.push(new AccountController("monkey fund", 500));

    //test elimanted when function was removed
    // test('Does the delete Account method work?', () => {
    //     expect(testArray[0].deleteAccount(testArray)).toEqual([{"accountName": "orca fund", "currentBalance": 200, "startingBalance": 200},{"accountName": "monkey fund", "currentBalance": 500, "startingBalance": 500}]);
    // });

    test('Does the starting balanace method work?', () => {
        expect(testArray[0].startingAccountBalance(testArray)).toBe(500);
        expect(testArray[1].startingAccountBalance(testArray)).toBe(200);
    });

    test('Does the deposit method work?', () => {
        expect(testArray[0].deposit(testArray, 100)).toBe(600);
        expect(testArray[1].deposit(testArray, 200)).toBe(400);
    });

    test('Does withdraw method work?', () => {
        expect(testArray[0].withdraw(testArray, 100)).toBe(500);
        expect(testArray[1].withdraw(testArray, 100)).toBe(300);
    });

    test('Does the Balance method work?', () => {
        expect(testArray[1].balance(testArray)).toBe(300);
        expect(testArray[2].balance(testArray)).toBe(500);
    });

    //test elimanted when function was removed
    // test('Does the ShowAccount method work?', () => {
    //     expect(testArray[1].showAccount(testArray)).toEqual({"accountName": "orca fund", "currentBalance": 200, "startingBalance": 200});
    // });

    test('Does the showAccountsTotal method work?', () => {
        expect(testArray[0].showAccountsTotal(testArray)).toBe(1300);
        testArray.push(new AccountController("lemur fund", 500));
        expect(testArray[0].showAccountsTotal(testArray)).toBe(1800);
        testArray.push(new AccountController("duck fund", 1200));
        expect(testArray[0].showAccountsTotal(testArray)).toBe(3000);
    });

    test('Does the showLargestAccount Method work?', () => {
        expect(testArray[0].showLargestAccount(testArray)).toEqual({"accountName": "duck fund", "currentBalance": 1200, "startingBalance": 1200});
        testArray.push(new AccountController("lamborghini fund", 1700));
        expect(testArray[0].showLargestAccount(testArray)).toEqual({"accountName": "lamborghini fund", "currentBalance": 1700, "startingBalance": 1700});
    });

    test('Does the showSmallestAccount Method work?', () => {
        expect(testArray[0].showSmallestAccount(testArray)).toEqual({"accountName": "orca fund", "currentBalance": 300, "startingBalance": 200});
        testArray.push(new AccountController("Larrys Rum Fund", 1));
        expect(testArray[0].showSmallestAccount(testArray)).toEqual({"accountName": "Larrys Rum Fund", "currentBalance": 1, "startingBalance": 1});
        testArray.push(new AccountController("swan fund", 0));
        expect(testArray[0].showSmallestAccount(testArray)).toEqual({"accountName": "swan fund", "currentBalance": 0, "startingBalance": 0});
    });