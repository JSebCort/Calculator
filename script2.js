let mainDisplay = "";
let subDisplay = "";
let numOne = "";
let numTwo = "";
let operator1 = "";
let operator2 = "";
  
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

function check() {
    console.log("n1:",numOne,"n2:",numTwo,"op1:",operator1,"op2:",operator2);
}

function onRun(x) {
    mainDisplay = mainDisplay + String(x);
    document.getElementById("valueDisplay").value = mainDisplay;

}

function disableButtons() {
    const numButtons = document.getElementsByClassName("numButtons");
    for (const input of numButtons){
        input.disabled = true;
    }
}

function enableButtons() {
    const numButtons = document.getElementsByClassName("numButtons");
    for (const input of numButtons){
        input.disabled = false;
    }
}

function updateDisplays() {
    document.getElementById('valueDisplay').value = mainDisplay;
    document.getElementById('functionDisplay').value = subDisplay;
    
}

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

function operator(x) {
    // If operator2 is the same as operator1, don't evaluate
    if (operator2 == x) { 
        return;
    } else if (operator1 == "") {
        numOne = mainDisplay;
        operator1 = x;
        subDisplay = numOne+operator1;
        mainDisplay = "";
        updateDisplays();
    } else if (operator1 != "") {
        operator2 = x;
        numTwo = document.getElementById("valueDisplay").value = mainDisplay;

        let answer = String(operate(operator1,parseInt(numOne),parseInt(numTwo)));
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


function equals() {
    if (operator1 == "" || document.getElementById('valueDisplay').value == "") {
        return;
    }

    numTwo = document.getElementById('valueDisplay').value;
    let answer = operate(operator1,parseInt(numOne),parseInt(numTwo));

    if (answer == "Divided by 0") {
        document.getElementById("valueDisplay").value = answer;
        disableButtons();
        return;
    }
    
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

document.getElementById("clear").onclick = function(){clear()};

document.getElementById("equals").onclick = function(){equals()};