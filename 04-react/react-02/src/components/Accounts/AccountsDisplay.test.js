import React from 'react'
import { render, screen, fireEvent, act } from "@testing-library/react";
import AccountsDisplay from './AccountsDisplay'
import AccountController from './AccountController'
import { ThemeContext } from '../../contexts/ThemeContext'



// create an instance of my Accountcontroller and my AccountDisplay
    const testDisplay = new AccountsDisplay();
    const testController = new AccountController();
   


test('test the AccountsDisplay', () => {
    /*
        create a mock function to simulate the save, cancel, and userMsg
        https://jestjs.io/docs/en/mock-functions
    */
    const mockCreateAccount = jest.fn();
    const mockDepositMoney = jest.fn();


// create some Accounts
    testController.createAccount("savings", 500);
    testController.createAccount("orca fund", 200);
    testController.createAccount("monkey fund", 500);

// default a few values
    let accountName = "Larry's Rum Fund";
    let depoistAmount = 1;


// Render the display

    render(<AccountsDisplay
        testAccount = {accountName}
        testDeposit = {depoistAmount}
        createAccount={mockCreateAccount} 
        deposit={mockDepositMoney}
        />);

    // screen.debug()

    screen.getByText(/AccountsDisplay/i);

// Did the names render correctly
    expect(props.accountName).value.toBe("");
    // expect(getValue('depositAmount')).toBe(1);


// Update a few values on the form
    // updateAccountName("idAccountName", "Larry's Rum Fund");
    // updateValue('lname', 'Shumy');
    // updateValue('company', 'LM');

// Trigger an Account Creation
    click("Add Account");

});
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });





// test('test the getAccountName function', () => {
//     const myCountFun = jest.fn();

//     console.log('Does this work');
//     render(<LarryComp countFunc={myCountFunc} />);
//     // screen.debug();

//     click(/larryComp/i);

//     console.log(myCountFun.mock.calls.length);

// });

// test('test the AccountDisplay', async () => {
//     const myCountFun = jest.fn();

//     console.log('Does this work');
//     render(<LarryComp countFunc={myCountFunc} />);
//     // screen.debug();

//     click(/larryComp/i);

//     console.log(myCountFun.mock.calls.length);

    // const el = screen.getByText(/larrycomp/i);

    // fireEvent.click(el);
// });

/*
    utility functions to save tons of code
*/
// function getValue(name) {
//     return document.querySelector(`[name=${name}]`).value;
// }

// function updateAccountName(name, value) {
//     document.querySelector(`[idAccountName=${accountName}]`).value = value;
// }

// function updateDepositAmount(name, value) {
//     document.querySelector(`[name=${name}]`).value = value;
// }

function click (txt) {
    fireEvent.click(
        screen.getByText(txt)
    );
}




    // test('Does the starting balanace method work?', () => {
    //     expect(testArray.userAccounts[0].startingAccountBalance()).toBe(500);
    //     expect(testArray.userAccounts[1].startingAccountBalance()).toBe(200);
    // });

    // test('Does the deposit method work?', () => {
    //     expect(testArray.userAccounts[0].deposit(100)).toBe(600);
    //     expect(testArray.userAccounts[1].deposit(200)).toBe(400);
    // });

    // test('Does withdraw method work?', () => {
    //     expect(testArray.userAccounts[0].withdraw(100)).toBe(500);
    //     expect(testArray.userAccounts[1].withdraw(100)).toBe(300);
    // });

    // test('Does the Balance method work?', () => {
    //     expect(testArray.userAccounts[1].balance()).toBe(300);
    //     expect(testArray.userAccounts[2].balance()).toBe(500);
    // });





//     // create a People controller and a new person
//     const peopleCtrl = new funcs.People()
//     const person = peopleCtrl.getNewPerson();

//     // default a few values
//     person.fname = 'Larry';
//     person.lname = 'Shumlich';

//     // Render the form
//     render(<PersonForm 
//         person={person} 
//         save={mockSaveCallback} 
//         cancel={mockCancelCallback}
//         userMsg={mockUserMsgCallback}
//         />);
//     // screen.debug()

//     // Did the names render correctly
//     expect(getValue('fname')).toBe('Larry');
//     expect(getValue('lname')).toBe('Shumlich');

//     // Update a few values on the form
//     updateValue('fname', 'Lorraine');
//     updateValue('lname', 'Shumy');
//     updateValue('company', 'LM');

//     // Trigger a save
//     click('Save');

//     // The save mock should have been called once
//     expect(mockSaveCallback.mock.calls.length).toBe(1);

//     // Grab the first parm sent to the mock save object (which should be the person to save)
//     const savePerson = mockSaveCallback.mock.calls[0][0];

//     // console.log(savePerson);
//     expect(savePerson.fname).toBe('Lorraine');
//     expect(savePerson.lname).toBe('Shumy');
//     expect(savePerson.company).toBe('LM');

//     // Trigger a cancel
//     click('Cancel');

//     // The cancel mock should have been called once
//     expect(mockCancelCallback.mock.calls.length).toBe(1);

// });


// test('test all the attriutes render and are saved for the basic PersonForm', async () => {
//     const dummyData = {
//         fname: 'fnamexx',
//         lname: 'lnamexx',
//         company: 'companyxx',
//         address: 'addressxx',
//         city: 'cityxx',
//         prov: 'provxx',
//         post: 'postxx',
//     };

//     const mockSaveCallback = jest.fn();
//     const mockUserMsgCallback = jest.fn();

//     const person = {};
//     for (let k in dummyData) {
//         person[k] = dummyData[k];
//     }

//     // Render the form
//     render(<PersonForm 
//         person={person} 
//         save={mockSaveCallback} 
//         userMsg={mockUserMsgCallback}
//         />);
//     // screen.debug()

//     // make sure every field rendored correctly
//     for (let k in dummyData) {
//         expect(dummyData[k]).toBe(getValue(k));
//     }
//     // screen.debug()
    
//     // Trigger a save
//     click('Save');

//     // Grab the first parm sent to the mock save object 
//     //    (which should be the person to save)
//     const savePerson = mockSaveCallback.mock.calls[0][0];

//     // console.log(savePerson);
//     for (let k in savePerson) {
//         expect(savePerson[k]).toBe(dummyData[k]);
//     }
// });


// test('test validation works', async () => {

//     const person = {};
//     const mockSaveCallback = jest.fn();
//     const mockUserMsgCallback = jest.fn();

//     // Render the form
//     render(<PersonForm 
//         person={person} 
//         save={mockSaveCallback}
//         userMsg={mockUserMsgCallback}
//         />);
//     // screen.debug()
    
//     // Trigger a save to see what errors we get
//     click('Save');

//     // Should not have done a save
//     expect(mockSaveCallback.mock.calls.length).toBe(0);
//     // Should have sent a message to the user
//     expect(mockUserMsgCallback.mock.calls.length).toBe(1);
//     expect(mockUserMsgCallback.mock.calls[0][0]).toMatch(/first name/i);

//     updateValue('fname', 'xxx');
//     click('Save');
//     expect(mockUserMsgCallback.mock.calls.length).toBe(2);
//     expect(mockUserMsgCallback.mock.calls[1][0]).toMatch(/last name/i);

//     updateValue('lname', 'xxx');
//     click('Save');
//     expect(mockSaveCallback.mock.calls.length).toBe(1);
//     expect(mockUserMsgCallback.mock.calls.length).toBe(3);
//     expect(mockUserMsgCallback.mock.calls[2][0]).toMatch(/saved/i);

// });
