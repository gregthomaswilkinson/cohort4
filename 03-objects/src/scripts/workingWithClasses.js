

    class Account {

        constructor(accountName, startingBalance) {
            this.accountName = accountName;
            this.startingBalance = startingBalance;
            this.currentBalance = startingBalance
        }

        deposit (amount) {
            this.currentBalance = this.currentBalance + amount;
            
        } 
        
        withdraw (amount) {
            this.currentBalance = this.currentBalance - amount;
        } 
        
        balance() {
            return `Your current balance is ${currentBalance}`
        }

        show() {
            
            return `You have a ${this.accountName} and your current balance is ${this.currentBalance}$`
        }

        startingBalance() {
            return `When you began your account had a starting balance of ${this.startingBalance}$`
        }

    }


    class Person extends Account{

        superconstructor(accountHolderName, accountHolderAge) {
            this.accountHolderName = accountHolderName;
            this.accountHolderAge = accountHolderAge;
        }

        //Accounts() {

        //}
    }

const user = new Person("Greg", 37)
const userAccounts = []

// console.log(user.show());
// Greg.deposit(10);
// console.log(user.show());
// Greg.withdraw(30)
// console.log(user.show());
// const workingWithClasses = {

    

// }