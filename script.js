// collection of keys
const allButtons = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    'DEL', '0', '.', '='
];

const operationButtons = ['÷', '×', '-', '+', '='];
const topButtons = ['AC', '+/-', '%'];

const buttonArea = document.querySelector('.keys');
const display = document.querySelector('.display');
const smallDisplay = document.querySelector('.small-display');

let A = null;
let operator = null;
let B = null;
let tempOperator = null;
let equalSignPressed = false;
let operatorPressed = false;

function clearAll() {
    display.value = '';
    smallDisplay.value = '';
    A = null;
    operator = null;
    B = null;
    tempOperator = null;
    equalSignPressed = false;
    operatorPressed = false;
}

function calculate() {
    B = display.value;
    let numA = Number(A);
    let numB = Number(B);
    if (operator === '+') {
        display.value = numA + numB;
    }
    else if (operator === '-') {
        display.value = numA - numB;
    }
    else if (operator === '÷') {
        if (numB === 0) {
            display.value = 'Error. Press AC';
        }
        else {
            display.value = numA / numB;
        }
    }
    else if (operator === '×') {
        display.value = numA * numB;
    }
}

for (let i = 0; i < allButtons.length; i++) {
    let value = allButtons[i];
    const button = document.createElement('button');
    button.textContent = value;

    if (operationButtons.includes(value)) {
        button.style.backgroundColor = '#dba737';
        button.style.color = '#fff';
    }
    else if (topButtons.includes(value)) {
        button.style.backgroundColor = '#959595';
        button.style.color = '#fff';
    }
    else {
        button.style.backgroundColor = '#656565';
        button.style.color = '#fff';
    }

    button.addEventListener('click', () => {
        if (operationButtons.includes(value)) {
            if (value === '=') {
                operatorPressed = false;
                if (A !== null) {
                    // Check to ensure calculation does not follow an operator. Otherwise will result in Null/NaN
                    if (!operationButtons.includes(display.value)) {
                        if (!equalSignPressed) {
                            calculate();
                            equalSignPressed = true;
                            smallDisplay.value = `${A} ${operator} ${B} = `;
                        }
                    }
                }
            }
            else {
                // Make sure pressing operator in succession does not trigger calucations
                if (!operatorPressed) {
                    if (equalSignPressed) {
                        equalSignPressed = false;
                        operator = value;
                        A = display.value;
                        smallDisplay.value = `${A} ${operator}`;
                    }
                    else if (A === null && operator === null) {
                        A = display.value;
                        operator = value;
                        display.value = value;
                        smallDisplay.value = `${A} ${operator}`;
                    }
                    // Make sure to evaluate no more than a single pair of numbers at at time
                    else if (A !== null && operator !== null) {
                        // Check to ensure calculation does not follow an operator. Otherwise will result in Null/NaN
                        if (!operationButtons.includes(display.value)) {
                            tempOperator = value;
                            calculate();
                            A = display.value;
                            operator = tempOperator;
                            smallDisplay.value = `${A} ${operator}`;
                        }
                    }
                }
                operatorPressed = true;
            }
        }
        else if (topButtons.includes(value)) {
            if (value === 'AC') {
                clearAll();
            }
            else if (value === '+/-') {
                display.value *= -1;
            }
            else {
                display.value = Number(display.value) / 100;
            }
        }
        else {
            if (value === '.') {
                if (!display.value.includes(value)) {
                    if (display.value === '') {
                        display.value = '0';
                    }
                    display.value += value;
                }
            }
            else if (value === 'DEL') {
                display.value = display.value.slice(0, (display.value.length - 1))
            }
            else {
                if (equalSignPressed === true) {
                    clearAll();
                    display.value += value;
                }
                else if (operatorPressed) {
                    display.value = '';
                    display.value += value;
                }
                else if ((display.value[0] === '0') && (display.value[1] !== '.')) {
                    display.value = '';
                    display.value += value;
                }
                else if (operationButtons.some(i => i === display.value)) {
                    display.value = '';
                    display.value += value;
                }
                else {
                    display.value += value;
                }
                operatorPressed = false;
            }
        }
    });

    buttonArea.appendChild(button);
}
