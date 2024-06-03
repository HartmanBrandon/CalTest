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

function operate(operate, firstNumber, secondNumber){
    switch (operate) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
        default:
            break;
    }
}

function populate(displayValue){
    //populate the display on click
    // store value in var
    // console.log(displayValue);
    document.getElementById("display-input").setAttribute("value", displayValue.toString());

}