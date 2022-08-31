// Variables that will hold the content of the displays and the operands/operators utilized.
let mainDisplay = "";
let subDisplay = "";
let numOne = "";
let numTwo = "";
let operator1 = "";
let operator2 = "";
  
// Simple functions to handle operations, given two operands.
function add(x, y) {
    return (x)+(y);
}

function subtract(x, y) {
    return (x)-(y);
}

function multiply(x, y) {
    return (x)*(y);
}

function divide(x, y) {
    return ((x)/(y)).toFixed(2);
}

// Given two operands and an operator, the corresponding function is called and the result is returned.
function operate(operator, x, y) {
    x = parseInt(x);
    y = parseInt(y);
    switch (operator) {
        case "+":
        return add(x, y);
        case "-":
        return subtract(x, y);
        case "*":
        return multiply(x, y);
        case "/":
            if (y==0){
                return ("Divided by 0");
            } else{
                return divide(x, y);
            }
        
    }
}

// Function to help understand the logic's use of these four variables.
function check() {
    console.log("n1:",numOne,"n2:",numTwo,"op1:",operator1,"op2:",operator2);
}

/**
 * When a number button is clicked, it appends the number to the main display.
 * @param {*} x ; The number value corresponding to the button clicked.
 */
function onRun(x) {
    mainDisplay = mainDisplay + String(x);
    document.getElementById("valueDisplay").value = mainDisplay;
}

/**
 * Disables all functionality of the buttons, except 'Clear'.
 * This allows the 'Clear' button to re-enable the buttons.
 */
function disableButtons() {
    const numButtons = document.getElementsByClassName("numButtons");
    for (const input of numButtons){
        input.disabled = true;
    }
}

/**
 * Enables all functionality of the buttons.
*/
function enableButtons() {
    const numButtons = document.getElementsByClassName("numButtons");
    for (const input of numButtons){
        input.disabled = false;
    }
}

/**
 * The two displays are updated to show the current operation being handled.
 */
function updateDisplays() {
    document.getElementById('valueDisplay').value = mainDisplay;
    document.getElementById('functionDisplay').value = subDisplay;
}

/**
 * Resets all variables, displays and enables all buttons if the 'Clear' button is clicked.
 */
function clear() {
    document.getElementById('valueDisplay').value = "";
    document.getElementById('functionDisplay').value = "";
    mainDisplay = "";
    subDisplay = "";
    numOne = "";
    numTwo = "";
    operator1 = "";
    operator2 = "";
    enableButtons();
}
/**
 * Handles functionality of the calculator when operator buttons are clicked.
 * @param {*} x ; The operator being passed if it has been clicked.
 * @returns Updates the displays.
 */
function operator(x) {
    // If operator2 is the same as operator1, don't evaluate
    if (operator2 == x) { 
        return;
    }

    // If there isn't already an operator, store the operator as operator1.
    // Then it updates the displays and prepares for the next number.
    else if (operator1 == "") {
        numOne = mainDisplay;
        operator1 = x;
        subDisplay = numOne+operator1;
        mainDisplay = "";
        updateDisplays();
    } 

    // If a second operator is clicked, without having clicked the equals button, it calculates
    // the operation using num1, num2 and operator1. Then the 2nd operator now becomes operator1.
    else if (operator1 != "") {
        operator2 = x;
        numTwo = document.getElementById("valueDisplay").value = mainDisplay;
        let answer = String(operate(operator1,parseInt(numOne),parseInt(numTwo)));

        // If the user tries to divide by 0, the buttons are disabled and the calculator must be cleared.
        if (answer == "Divided by 0") {
            document.getElementById("valueDisplay").value = answer;
            disableButtons();
            return;
        }

        subDisplay = numOne+operator1+numTwo+"="+answer;
        operator1 = operator2;
        numOne = answer;
        numTwo = "";
        operator2 = "";
        mainDisplay = "";

        updateDisplays();
    }
}

/**
 * 
 * @returns The result of the operation handled.
 */
function equals() {
    // If an operator wasn't input before clicking equals, do nothing.
    if (operator1 == "" || document.getElementById('valueDisplay').value == "") {
        return;
    }

    // Stores numTwo and handles the operation.
    numTwo = document.getElementById('valueDisplay').value;
    let answer = operate(operator1,parseInt(numOne),parseInt(numTwo));

    // If the user tries to divide by 0, the buttons are disabled and the calculator must be cleared.
    if (answer == "Divided by 0") {
        document.getElementById("valueDisplay").value = answer;
        disableButtons();
        return;
    }
    
    // If the previous calculations were done through multiple operators (rather than equals),
    // this checks the subDisplay for an operator so it can correctly display the result.
    // Else it simply displays the answer given the variables already stored.
    if (['*', '/', '-', '+'].includes(subDisplay.slice(-1))) {
        console.log('here')
        numOne = answer;
        mainDisplay = numOne;
        subDisplay = subDisplay+numTwo+"=";
        numTwo = "";
        operator1 = "";
        updateDisplays(1);
    } else {
        console.log('there')
        numOne = answer;
        mainDisplay = numOne;
        subDisplay = subDisplay+operator1+numTwo+"=";
        numTwo = "";
        operator1 = "";
        updateDisplays();
    }
}

// Calls the functions if the corresponding buttons are clicked.
document.getElementById("clear").onclick = function(){clear()};
document.getElementById("equals").onclick = function(){equals()};