/**
 * This file is no longer used and was replaced by script2.js
 */

let calculation = {
  numOne : null,
  numTwo : null,
  operator: null
}

function add(x, y){
    return (x)+(y);
}

function subtract(x, y){
    return (x)-(y);
}

function multiply(x, y){
    return (x)*(y);
}

function divide(x, y){
    return (x)/(y);
}

function operate(operator, x, y){
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
          return divide(x, y);
      }
}

function onRun(x){
  let current = document.getElementById("displayVal").value;
  if(current.length == 1 && current == '0'){
    document.getElementById("displayVal").value = x;
  }
  else{
    current = current + String(x);
    document.getElementById("displayVal").value = current;
  }
}

function clear(){
  document.getElementById('displayVal').value = "";
  document.getElementById('function').value = "";
  calculation['numOne'] = 0;
  calculation['numTwo'] = null;
  calculation['operator'] = "";

}

function operator(x){
  if (calculation['numOne'] == null){
    console.log('here');
    
    calculation['numOne'] = document.getElementById("displayVal").value;
    calculation['operator'] = x;
    document.getElementById('function').value = calculation['numOne']+""+calculation['operator'];
    document.getElementById("displayVal").value = "";
    console.log(calculation);
  }
  else{
    if(calculation['operator'] != null){
      console.log('there');
      console.log(calculation);
      calculation['numTwo'] = document.getElementById("displayVal").value;
      calculation['numOne'] = operate(calculation['operator'], calculation['numOne'], calculation['numTwo']);
      document.getElementById('function').value = calculation['numOne']+""+calculation['operator'];
      document.getElementById("displayVal").value = calculation['numOne'];
      calculation['numTwo'] = null;
      calculation['operator'] = null;
      console.log(calculation);
    }
  }

}


function equals(){
  calculation['numTwo'] = document.getElementById("displayVal").value;
  console.log('here');
  console.log(calculation);
  if(calculation['numOne'] != 0 && calculation['numTwo'] != null){
    let result = operate(calculation['operator'], calculation['numOne'], calculation['numTwo'])
    console.log(result);
    document.getElementById('function').value = document.getElementById('function').value + calculation['numTwo']+ '=';
    document.getElementById("displayVal").value = result;
    calculation['numOne'] = result;
    calculation['numTwo'] = null;
    calculation['operator'] = "";
  }
  console.log(calculation);
}

document.getElementById("clear").onclick = function(){clear()};

document.getElementById("equals").onclick = function(){equals()};