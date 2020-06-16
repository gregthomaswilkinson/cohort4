import functions from './functions.js';
import calculator from './calculator.js';
import canadianTaxes from './canadiantaxes.js';
import workingWithArrays from './workingwitharrays.js';
import workingWithDictionaries from './workingwithDictionaries.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

//My Calculator Event Listeners
let answer = 0;

    document.getElementById("mathItOut").addEventListener("click", function() {
    console.log("I'm the button click event");
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

        if (number1 > 0 && number2 > 0 && document.getElementsByName("mathOperator")[3].checked) {
            answer = calculator.add(number1, number2);
            document.getElementById("calculatorMessageArea").textContent= answer;
        } else if (number1 > 0 && number2 > 0 && document.getElementsByName("mathOperator")[2].checked) {
            answer = calculator.subtract(number1, number2);
            document.getElementById("calculatorMessageArea").textContent= answer;
        } else if (number1 > 0 && number2 > 0 && document.getElementsByName("mathOperator")[1].checked) {
            answer = calculator.multiply(number1, number2);
            document.getElementById("calculatorMessageArea").textContent= answer;
        } else { (number1 > 0 && number2 > 0 && document.getElementsByName("mathOperator")[0].checked) 
            answer = calculator.divide(number1, number2);
            document.getElementById("calculatorMessageArea").textContent= answer;
        }
    });

//Canadian tax Calculation Event Listeners
let incomeAfterTax = 0;

    document.getElementById("calculate!!").addEventListener("click", function() {
    console.log("I'm the click event")
    let taxableincome = Number(document.getElementById("taxableincome").value);
        if (taxableincome> 0) {
            document.getElementById("canadianTaxMessageArea").textContent = canadianTaxes.calculateIncome(taxableincome, incomeAfterTax).toFixed(2);
        }
    });


//Working with Arrays Event Listeners & variables
let array = [];

    document.getElementById("addToArray").addEventListener("click", function() {
        console.log("I'm the click event")
        let newValue = Number(document.getElementById("arrayInput").value);
        if (newValue>= 0 && newValue !== NaN) {
            workingWithArrays.addButton(newValue, array);
            arrayInput.value = "";
            document.getElementById("arrayMessageArea").textContent = "Your Number as been added to the Array";
        } else {
            document.getElementById("arrayMessageArea").textContent = "I can only add numbers to the Array";
            arrayInput.value = "";
        }
    });

    document.getElementById("showArray").addEventListener("click", function() {
        document.getElementById("arrayMessageArea").textContent = array;
    });

    document.getElementById("totalArrayLength").addEventListener("click", function() {
        let total = 0;
        console.log(array);
        document.getElementById("arrayMessageArea").textContent = `The total value of the numbers in the array is ${workingWithArrays.showTotal(array, total)}`;
    });

    document.getElementById("clearArray").addEventListener("click", function() {
        array = []
        document.getElementById("arrayMessageArea").textContent = "Message Area";
    });

//Working with Dictionaries
let provinces = {AB: "Alberta", BC: "British Columbia", SK: "Sasktachewan",
QC: "Quebec", NB: "New Brunswick", MB: "Manitoba", NL: "Newfoundland and Labrador",
PE: "Prince Edward Island", NS: "Nova Scotia", ON: "Ontario", NT: "Northwest Territories",
YT: "Yukon", NU: "Nunavut"};

    document.getElementById("lookup").addEventListener("click", function() {
        console.log("I'm the click event")
        let key = document.getElementById("whichProvince").value;
        workingWithDictionaries.checkDictionary(provinces, key);
        document.getElementById("objectMessageArea").textContent = provinces[key];
    });