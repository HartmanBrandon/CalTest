// TODO: Look into code thats not eval()

let firstNumber;
let secondNumber;
let operator;
let displayValue;

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        console.log("Error: Cannot divide by zero");
        return 0;
    }
    return firstNumber / secondNumber;
}

function operate(){
    let firstNumber = parseInt(sessionStorage.getItem("firstNumber"));
    let secondNumber = parseInt(sessionStorage.getItem("secondNumber"));
    let operator = sessionStorage.getItem("operator");
    let result;
    switch (operator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = subtract(firstNumber, secondNumber);
            break;
        case "*":
            result = multiply(firstNumber, secondNumber);
        case "/":
            result = divide(firstNumber, secondNumber);
        default:
            result = 0;
            break;
    }
    populate(result);
}

function populate(displayValue){
    //populate the display on click
    // store value in var
    // console.log(displayValue);
    document.getElementById("display-input").setAttribute("value", displayValue.toString());

}

function storeNumber(num){
    let operator = sessionStorage.getItem("operator");
    if(operator){
        sessionStorage.setItem("secondNumber", num);
    } 
    else {
        sessionStorage.setItem("firstNumber", num);
    }
}

function handleOnClick(num){
    populate(num);
    storeNumber(num);
}

function handleOperatorClick(operator){
    populate(operator);
    sessionStorage.setItem("operator", operator);
}

function reset(){
    sessionStorage.clear();
    populate(0);
}