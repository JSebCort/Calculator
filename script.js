let calculation = {
  numOne : 0,
  numTwo : null,
  operator: ""
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
}

function operator(x){
  let newVal = document.getElementById("displayVal").value
  console.log(newVal);
  if(newVal != ""){
    calculation['numOne'] = newVal;
    calculation['operator'] = x;
    document.getElementById('function').value = (calculation['numOne']) + calculation['operator'];
    document.getElementById("displayVal").value = "";
  }
  console.log(calculation);
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
  }
  console.log(calculation);
}

document.getElementById("clear").onclick = function(){clear()};

document.getElementById("equals").onclick = function(){equals()};