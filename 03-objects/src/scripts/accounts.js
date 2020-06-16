

class AccountController {

    constructor (accountName, startingBalance) {
        this.accountName = accountName;
        this.startingBalance = startingBalance;
        this.currentBalance = startingBalance
    }

    // deleteAccount (userAccounts) {
    //     for (let i = 0; i<userAccounts.length; i++) {
    //         userAccounts.splice([i], 1);
    //         
    //         return userAccounts;
    //     }
    // }

    startingAccountBalance(userAccounts) {
        for (let i = 0; i<userAccounts.length; i++) {
            return this.startingBalance;
        }
    }

    deposit (userAccounts, amount) {
        for (let i = 0; i<userAccounts.length; i++) {
            this.currentBalance = this.currentBalance + amount;
            return this.currentBalance;
        }
    } 
    
    withdraw (userAccounts, amount) {
        for (let i = 0; i<userAccounts.length; i++) {
            this.currentBalance = this.currentBalance - amount;
            return this.currentBalance;
        }
    } 
    
    balance(userAccounts) {
        for (let i = 0; i<userAccounts.length; i++) {
            return this.currentBalance;
        }
    }

    // showAccount(userAccounts) {
    //     for (let i = 0; i<userAccounts.length; i++) {
    //         return userAccounts[i];
    //     }
    // }

    showAccountsTotal(userAccounts) {
        let dollarTotal= [];
        let total= 0;
            for (let i = 0; i<userAccounts.length; i++) {
                dollarTotal.push(userAccounts[i].currentBalance);
            }
            for (let j in dollarTotal) { total += dollarTotal[j]; }
            console.log(dollarTotal);
            console.log(total);
            return total;

    }

    showLargestAccount(userAccounts) {
        let mostDollars= [];
        for (let i = 0; i<userAccounts.length; i++) {
            mostDollars.push(userAccounts[i].currentBalance);
        }
        console.log(mostDollars);
        mostDollars = Math.max(...mostDollars);
        console.log(mostDollars);
        for (let j = 0; j<userAccounts.length; j++) {
            if (userAccounts[j].currentBalance === mostDollars) {
                return userAccounts[j];
            }
        }
    }

    showSmallestAccount(userAccounts) {
        let leastDollars= [];
        for (let i = 0; i<userAccounts.length; i++) {
            leastDollars.push(userAccounts[i].currentBalance);
        }
        console.log(leastDollars);
        leastDollars = Math.min(...leastDollars);
        console.log(leastDollars);
        for (let j = 0; j<userAccounts.length; j++) {
            if (userAccounts[j].currentBalance === leastDollars) {
                console.log(userAccounts[j])
                return userAccounts[j]
            }

        }
    }

}



// let account = new Account("savings", 0);

// console.log(account.show());
// account.deposit(10);
// console.log(account.show());
// account.withdraw(30)
// console.log(account.show());
// console.log(account)

export default AccountController;