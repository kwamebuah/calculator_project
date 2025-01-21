// collection of keys
const allButtons = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    'OT', '0', '.', '='
];

let A = null;
let operation = null;
let B = null;

function clearAll() {
    display.value = '';
    A = null;
    operation = null;
    B = null;
}

const operationButtons = ['÷', '×', '-', '+', '='];
const topButtons = ['AC', '+/-', '%'];

const buttonArea = document.querySelector('.keys');
const display = document.querySelector('.display');

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
                if (A !== null) {
                    B = display.value;
                    let numA = Number(A);
                        let numB = Number(B);
                    if (operation === '+') {
                        display.value = numA + numB;
                    }
                    else if (operation === '-') {
                        display.value = numA - numB;
                    }
                    else if (operation === '÷') {
                        display.value = numA / numB;
                    }
                    else if (operation === '×') {
                        display.value = numA * numB;
                    }
                }
            }
            else {
                operation = value;
                A = display.value;
                display.value = '';
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
            else if (value === 'OT') {

            }
            else {
                if ((display.value[0] === '0') && (display.value[1] !== '.')) {
                    display.value = '';
                    display.value += value;
                }
                else {
                    display.value += value;
                }
            }
        }
    });

    buttonArea.appendChild(button);
}
