    
    class Account {
        constructor(accountName, startingBalance) {
            this.accountName = accountName;
            this.startingBalance = startingBalance;
            this.currentBalance = startingBalance
        }
    
    startingAccountBalance() {
        return this.startingBalance;
    }

    deposit (amount) {
        this.currentBalance = this.currentBalance + amount;
        return this.currentBalance;
    } 
    
    withdraw (amount) {
        this.currentBalance = this.currentBalance - amount;
        return this.currentBalance;
    } 
    
        // showAccount(userAccounts) {
    //     for (let i = 0; i<userAccounts.length; i++) {
    //         return userAccounts[i];
    //     }
    // }

    balance() {
            return this.currentBalance;
    }
}


export default Account;