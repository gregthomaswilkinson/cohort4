import React from 'react'
import AccountController from './AccountController'
import { ThemeContext } from '../../contexts/ThemeContext'


const controller = new AccountController();

class AccountsDisplay extends React.Component {
    constructor() {
        super();
        this.state = {
            accountName: "",
            depositAmount: 0,

            accountsTotal: 0,
            largestAccount: "",
            smallestAccount: "",
            
            displayAccount: "",
            displayStartBalance: "",
            displayCurrentBalance: ""
        }
    }

    getAccountName = (event) => {
        this.setState({accountName: event.target.value});
    }

    getDepositAmount = (event) => {
        this.setState({depositAmount: event.target.value});
    }

    handleAccount = () => {
      controller.createAccount(this.state.accountName, Number(this.state.depositAmount));
      this.handleUpdate();
      // resetInput();
    }

    handleDeposit = () => {
      controller.addMoney(this.state.accountName, Number(this.state.depositAmount));
      this.handleUpdate();
      // resetInput();
    }

    handleDelete = () => {
      controller.deleteAccount(this.state.accountName);
      this.handleUpdate();
      // resetInput();
    }

    handleDisplay = () => {
      controller.displayAccountInfo(this.state.accountName);
      this.setState({displayAccount: controller.displayAccountInfo(this.state.accountName).accountName});
      this.setState({displayStartBalance: controller.displayAccountInfo(this.state.accountName).startingBalance})
      this.setState({displayCurrentBalance: controller.displayAccountInfo(this.state.accountName).currentBalance})
      // resetInput();
    }

    handleUpdate = () => {
      this.setState({largestAccount: controller.showLargestAccount()});
      this.setState({smallestAccount: controller.showSmallestAccount()});
      this.setState({accountsTotal: controller.showAccountsTotal()});
    }

    resetInput = () => {
      this.setState({accountName: ""});
      this.setState({depositAmount: 0});
    }

    static contextType = ThemeContext
    render() {
      console.log(this.context);
      const { isLightTheme, light, dark } = this.context;
      const theme = isLightTheme ? light : dark;
      return (
        <div className="App" style = {{ color: theme.text, background: theme.bg }}>
          <h1>Accounts project</h1><br /><br />
          <div>
            <span>Enter Account name in the box below and press button to display</span><br />
            <button type = "button" id= "idDisplayAccount" onClick={() => this.handleDisplay()}>Display Account Information</button><br /><br />
            <span id="idAccountDisplayArea">Account Name: {this.state.displayAccount}</span><br />
            <span id="idAccountStartingBalance">Starting Balance: {this.state.displayStartBalance}</span><br />
            <span id="idAccountCurrentBalance">Current Balance: {this.state.displayCurrentBalance}</span><br />
            <div>
                <span>Enter the name of the account to create or view</span><br />
                <input type ="text" id ="idAccountName" placeholder="Name of Account" value={this.state.value} onChange={this.getAccountName}></input><br />
                <button type = "button" id= "idAddAccount" onClick={() => this.handleAccount()}>Add Account</button>
                <button type = "button" id= "idRemoveAccount" onClick={() => this.handleDelete()}>Remove Account</button><br />
                <span>Enter account name in the field about and how much to deposit in the field below</span><br />
                <input type ="Number" id ="idDeposit" placeholder="Deposit Amount" value={this.state.value} onChange={this.getDepositAmount}></input><br />
                <button type = "button" id= "idGetPaid" onClick={() => this.handleDeposit()}>It's Payday!!</button><br />
                <span>View Account info</span><br />
                <span id ="idLargestAccountDisplay">Which is da biggest bank! {this.state.largestAccount}</span><br />
                <span id ="idSmallestAccountDisplay"> Which is the smallest bank account: {this.state.smallestAccount}</span><br />
                <span id ="idAccountTotal">Total value of all Account: {this.state.accountsTotal}</span><br />   
            </div>
          </div>
        </div>
      );
    }
}


export default AccountsDisplay;