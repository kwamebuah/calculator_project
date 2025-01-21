// collection of keys
const allButtons = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    'OT', '0', '.', '='
];

let A = 0;
let operation = null;
let B = null;

const operationButtons = ['÷', '×', '-', '+', '='];
const topButtons = ['AC', '+/-', '%'];

const buttonArea = document.querySelector('.keys');
const display = document.querySelector('.display');

display.value = '0';

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

        }
        else if (topButtons.includes(value)) {

        }
        else {
            if (value === '.') {

                if (!display.value.includes(value)) {

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
