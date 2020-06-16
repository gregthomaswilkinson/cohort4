import AccountController from './accounts.js';
import Community from './cityAndCommunity.js';
import functions from './fetch.js'


//Start of the Accounts code

const userAccounts = [];

const resetInput = () => {
    document.getElementById("idAccountName").value = "";
    document.getElementById("idDeposit").value = "";
}

//Creates an Account
    document.getElementById("idAddAccount").addEventListener("click", () => {
        let accountName = document.getElementById("idAccountName").value;
        let startingBalance = Number(document.getElementById("idDeposit").value);
        console.log(startingBalance);
        userAccounts.push(new AccountController(accountName, (0 + startingBalance)));
        console.log(userAccounts);
        resetInput();
        console.log(accountName);

    })

//Deletes an Account
    document.getElementById("idRemoveAccount").addEventListener("click", () => {
        for (let i = 0; i<userAccounts.length; i++) {
            if (document.getElementById("idAccountName").value === userAccounts[i].accountName) {
                userAccounts.splice([i], 1);
                console.log(userAccounts);
                resetInput();
            }
        }
    })

//Displays account Info
    document.getElementById("idDisplayAccount").addEventListener("click", () => {
        for (let i = 0; i<userAccounts.length; i++) {
            if (document.getElementById("idAccountName").value === userAccounts[i].accountName) {
                let showAccount = userAccounts[i];

                document.getElementById("idAccountDisplayArea").innerText = showAccount.accountName;
                document.getElementById("idAccountStartingBalance").innerText = showAccount.startingBalance;
                document.getElementById("idAccountCurrentBalance").innerText = showAccount.currentBalance;
                resetInput();
            }
        }
    })


//Add dollars to an account
    document.getElementById("idGetPaid").addEventListener("click", () => {
        for (let i = 0; i<userAccounts.length; i++) {
            if (document.getElementById("idAccountName").value === userAccounts[i].accountName) {
                let amount = Number(document.getElementById("idDeposit").value);
                userAccounts[i].deposit(userAccounts, amount);
                resetInput();
            }
        }
    })

//Get the total value of all Accounts
    document.getElementById("idAccountTotal").addEventListener("click", () => {
        let total = userAccounts[0].showAccountsTotal(userAccounts);

        document.getElementById("idAccountDisplayArea").innerText = "";
        document.getElementById("idAccountStartingBalance").innerText = "";
        document.getElementById("idAccountCurrentBalance").innerText = "Total of all accounts is " + total;
        resetInput();
    })

//Search for Account with the greatest amounts of dollars in it
    document.getElementById("idLargestAccount").addEventListener("click", () => {
        let LargestAccount = userAccounts[0].showLargestAccount(userAccounts);

        document.getElementById("idAccountDisplayArea").innerText = LargestAccount.accountName;
        document.getElementById("idAccountStartingBalance").innerText = LargestAccount.startingBalance;
        document.getElementById("idAccountCurrentBalance").innerText = LargestAccount.currentBalance;
        resetInput();
    })

//Search for Account with the lowest amounts of dollars in it
    document.getElementById("idSmallestAccount").addEventListener("click", () => {
        let smallestAccount = userAccounts[0].showSmallestAccount(userAccounts);

        document.getElementById("idAccountDisplayArea").innerText = smallestAccount.accountName;
        document.getElementById("idAccountStartingBalance").innerText = smallestAccount.startingBalance;
        document.getElementById("idAccountCurrentBalance").innerText = smallestAccount.currentBalance;
        resetInput();
    })



//Start of the City and Communities code
    let community = new Community;
    let key = 0;

    window.addEventListener('DOMContentLoaded', async () => {
        let data = await functions.postData('http://127.0.0.1:5000/all')
        console.log(data);
        data.forEach(value => {
            community.createCity(value.name, parseFloat(value.lat, 10), parseFloat(value.long, 10), parseFloat(value.key));
            community.createCard(community.cities[community.cities.length-1]);
            community.updateGUI();
            //document.getElementById('mainContent').appendChild(cityController.createCard(cityController.cityList[cityController.cityList.length - 1]));
            if (value.key >= key) key = value.key + 1;
        })

    });

    document.getElementById("idInputCity").addEventListener("click", async () => {

        let name = document.getElementById("idCityName").value;
        let lat = Number(document.getElementById("idLatitude").value);
        let long = Number(document.getElementById("idLongitude").value);
        let pop = Number(document.getElementById("idPopulation").value);

            community.createCity(name, lat, long, key, pop);
            //console.log(community);
            // await functions.postData("http://127.0.0.1:5000/add", {name, lat, long, key, pop});
            community.createCard(community.cities[community.cities.length-1]);
            key++
            community.updateGUI();
    })



