import AccountController from './AccountController'

let testArray = new AccountController();
testArray.createAccount("savings", 500);
testArray.createAccount("orca fund", 200);
testArray.createAccount("monkey fund", 500);


    test('Does the starting balanace method work?', () => {
        expect(testArray.userAccounts[0].startingAccountBalance()).toBe(500);
        expect(testArray.userAccounts[1].startingAccountBalance()).toBe(200);
    });

    test('Does the deposit method work?', () => {
        expect(testArray.userAccounts[0].deposit(100)).toBe(600);
        expect(testArray.userAccounts[1].deposit(200)).toBe(400);
    });

    test('Does withdraw method work?', () => {
        expect(testArray.userAccounts[0].withdraw(100)).toBe(500);
        expect(testArray.userAccounts[1].withdraw(100)).toBe(300);
    });

    test('Does the Balance method work?', () => {
        expect(testArray.userAccounts[1].balance()).toBe(300);
        expect(testArray.userAccounts[2].balance()).toBe(500);
    });

    test('Does the createCtiy method work', () => {
        expect(testArray.createAccount("test fund", 200)).toEqual([{"accountName": "savings", "currentBalance": 500, "startingBalance": 500}, {"accountName": "orca fund", "currentBalance": 300, "startingBalance": 200}, {"accountName": "monkey fund", "currentBalance": 500, "startingBalance": 500}, {"accountName": "test fund", "currentBalance": 200, "startingBalance": 200}]);
    });

    test('Does the addMoney method work', () => {
        expect(testArray.addMoney("test fund", 300)).toBe(500);
    });

    test('Does the delete Account method work?', () => {
        expect(testArray.deleteAccount("test fund")).toEqual([{"accountName": "savings", "currentBalance": 500, "startingBalance": 500},{"accountName": "orca fund", "currentBalance": 300, "startingBalance": 200},{"accountName": "monkey fund", "currentBalance": 500, "startingBalance": 500}]);
        expect(testArray.deleteAccount("savings")).toEqual([{"accountName": "orca fund", "currentBalance": 300, "startingBalance": 200},{"accountName": "monkey fund", "currentBalance": 500, "startingBalance": 500}]);
    }); 

    test('Does the showAccountsTotal method work?', () => {
        expect(testArray.showAccountsTotal(testArray)).toBe(800);
        testArray.createAccount("lemur fund", 500);
        expect(testArray.showAccountsTotal(testArray)).toBe(1300);
        testArray.createAccount("duck fund", 1200);
        expect(testArray.showAccountsTotal(testArray)).toBe(2500);
    });

    test('Does the showLargestAccount Method work?', () => {
        expect(testArray.showLargestAccount(testArray)).toEqual("duck fund");
        testArray.createAccount("lamborghini fund", 1700);
        expect(testArray.showLargestAccount(testArray)).toEqual("lamborghini fund");
    });

    test('Does the showSmallestAccount Method work?', () => {
        expect(testArray.showSmallestAccount(testArray)).toEqual("orca fund");
        testArray.createAccount("Larrys Rum Fund", 1);
        expect(testArray.showSmallestAccount(testArray)).toEqual("Larrys Rum Fund");
        testArray.createAccount("swan fund", 0);
        expect(testArray.showSmallestAccount(testArray)).toEqual("swan fund");
    });

