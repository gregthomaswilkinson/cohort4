import Account from './Accounts'

class AccountController {

    constructor () {
        this.userAccounts = [];
    }


    //Creates an Account
    createAccount = (accountName, depositAmount) => {
        console.log(depositAmount);
        this.userAccounts.push(new Account(accountName, (0 + depositAmount)));
        console.log(this.userAccounts);
        console.log(this.accountName);
        return this.userAccounts;

    }



    //Deletes an Account
    deleteAccount = (accountName) => {
        for (let i = 0; i<this.userAccounts.length; i++) {
            if (accountName === this.userAccounts[i].accountName) {
                this.userAccounts.splice([i], 1);
                console.log(this.userAccounts);
                return this.userAccounts;
            }
        }
    }

    //Add dollars to an account
    addMoney = (accountName, amount) => {
        for (let i = 0; i<this.userAccounts.length; i++) {
            if (accountName === this.userAccounts[i].accountName) {
                this.userAccounts[i].deposit(amount);
                return this.userAccounts[i].currentBalance;
            }
        }
    }

    //Displays account Info
    displayAccountInfo = (accountName) => {
        if (this.userAccounts.length === 0) {
            return {accountName: "", currentBalance: "", startingBalane: ""}
        } else {
            for (let i = 0; i<this.userAccounts.length; i++) {
                if (accountName === this.userAccounts[i].accountName) {
                    return this.userAccounts[i];
                }
            }
        }
    }

    showAccountsTotal = () => {
        let dollarTotal= [];
        let total= 0;
            for (let i = 0; i<this.userAccounts.length; i++) {
                dollarTotal.push(this.userAccounts[i].currentBalance);
            }
            for (let j in dollarTotal) { total += dollarTotal[j]; }
            console.log(dollarTotal);
            console.log(total);
            return total;
    }

    showLargestAccount = () => {
        let mostDollars= [];
        for (let i = 0; i<this.userAccounts.length; i++) {
            mostDollars.push(this.userAccounts[i].currentBalance);
        }
        console.log(mostDollars);
        mostDollars = Math.max(...mostDollars);
        console.log(mostDollars);
        for (let j = 0; j<this.userAccounts.length; j++) {
            if (this.userAccounts[j].currentBalance === mostDollars) {
                return this.userAccounts[j].accountName;
            }
        }
    }

    showSmallestAccount = () => {
        let leastDollars= [];
        for (let i = 0; i<this.userAccounts.length; i++) {
            leastDollars.push(this.userAccounts[i].currentBalance);
        }
        console.log(leastDollars);
        leastDollars = Math.min(...leastDollars);
        console.log(leastDollars);
        for (let j = 0; j<this.userAccounts.length; j++) {
            if (this.userAccounts[j].currentBalance === leastDollars) {
                console.log(this.userAccounts[j]);
                return this.userAccounts[j].accountName;
            }

        }
    }

}

export default AccountController;