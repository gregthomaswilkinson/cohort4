import Account from './Accounts'

let userAccounts = [];

userAccounts.push(new Account("Lamborghini Fund", 500));
userAccounts.push(new Account("Orca Fund", 200));
userAccounts.push(new Account("Larry's Rum Fund", 1));


test('Does the starting balanace method work?', () => {
    expect(userAccounts[0].startingAccountBalance()).toBe(500);
    expect(userAccounts[2].startingAccountBalance()).toBe(1);
});

test('Does the deposit method work?', () => {
    expect(userAccounts[0].deposit(100)).toBe(600);
    expect(userAccounts[1].deposit(200)).toBe(400);
});

test('Does withdraw method work?', () => {
    expect(userAccounts[0].withdraw(100)).toBe(500);
    expect(userAccounts[1].withdraw(100)).toBe(300);
});

test('Does the Balance method work?', () => {
    expect(userAccounts[1].balance()).toBe(300);
    expect(userAccounts[2].balance()).toBe(1);
});