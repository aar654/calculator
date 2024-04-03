//initialize variables
const operator = document.querySelectorAll('.operator');
const equalsKey = document.getElementById('equalsKey');
const display = document.getElementById('equation');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.getElementById('clear');
const backspace = document.getElementById('backspace');

let firstNumber;
let currentOperator;
let secondNumber;
let tempArray = [];
let previousOp;

display.textContent = '0';

//input values into an array
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        tempArray.push(e.target.value); // store value to temparray
        console.log(tempArray);
        display.innerHTML = Number(tempArray.join("")); // display number from array
    });
});

//takes the operator
operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        currentOperator = e.target.value; // store current operator
        console.log(currentOperator);
        firstNumber = Number(tempArray.join("")); // parse array to integers
        console.log(firstNumber);
        tempArray = []; // empty array
    });
});

//reset display
clear.addEventListener('click', function () {
    display.textContent = '0';
    tempArray = [];
})

//takes the numbers and operator input and gives output
function calculate() {
    secondNumber = Number(tempArray.join(""));
    let result = operate(parseFloat(firstNumber), parseFloat(secondNumber), currentOperator);
    firstNumber = result; // Store result to firstNumber

    console.log('the result is ' + firstNumber);
    display.textContent = firstNumber;
}

//operator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0)
        return "Can't divide by 0";

    else {

        return a / b;
    }
}

//operator functions based on operator
function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2)
        case '-':
            return subtract(num1, num2)
        case '*':
            return multiply(num1, num2)
        case '/':
            if (num2 === 0) return "Error"
            else return divide(num1, num2)
        default:
            return null;
    }
}

backspace.addEventListener('click', () => {
    tempArray.pop(); // Remove the last element from tempArray
    display.textContent = tempArray.length === 0 ? '0' : tempArray.join(""); // Update the display
});

equalsKey.addEventListener('click', calculate);
