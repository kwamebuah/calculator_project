// collection of keys
const allButtons = [
    'AC','+/-','%','÷',
    '7','8','9','×',
    '4','5','6','-',
    '1','2','3','+',
    'OT','0','.','='
];

const operationButtons = ['÷','×','-','+','='];
const topButtons = ['AC','+/-','%'];

const buttonArea = document.querySelector('.keys');

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
    
    buttonArea.appendChild(button);
}
