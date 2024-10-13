
const add = (a, b) => { return a + b };
const subtract = (a, b) => { return a - b };
const multiply = (a, b) => { return a * b };
const divide = (a, b) => { return a / b };

let firstNumber = "";
let secondNumber = "";
let operator;

const displayValue = document.getElementById("outcome");

const numberButtons = document.querySelectorAll("button.number");
numberButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
            if (!operator) {
                firstNumber += e.target.id;
            } else {
                secondNumber += e.target.id;
            }
            displayValue.textContent += e.target.id;
    })
});

const operatorButtons = document.querySelectorAll("button.operator");
operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
            firstNumber = parseFloat(firstNumber);
            displayValue.textContent += e.target.textContent;
    
            switch (e.target.id) {
                case 'add':
                    operator = add;
                    break;
                case 'subtract':
                    operator = subtract;
                    break;
                case 'multiply':
                    operator = multiply;
                    break;
                case 'divide':
                    operator = divide;
                    break;
            }    
    })
});

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", (e) => {
    if (firstNumber && operator && secondNumber) {
        secondNumber = parseFloat(secondNumber);
        const outcome = operator(firstNumber, secondNumber);
        displayValue.textContent = outcome;
        firstNumber = outcome.toString();
        secondNumber = "";
        operator = null;
    }    
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
    displayValue.textContent = "";
    firstNumber = "";
    secondNumber = "";
    operator = null;
})

const backspace = document.getElementById("backspace");
backspace.addEventListener("click", () => {
        if (!operator) {
            firstNumber = firstNumber.slice(0, -1);
        } if (operator && !secondNumber) {
            operator = null;
        } else {
            secondNumber = secondNumber.slice(0, -1);
        }
        displayValue.textContent = displayValue.textContent.slice(0, -1);
});

const percentage = document.getElementById("percentage");
percentage.addEventListener("click", () => {
    if (!operator || !secondNumber) {
        firstNumber *= 100;
        displayValue.textContent *= 100;
    }
})