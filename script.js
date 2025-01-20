/*
Variables for operations:
first number, second number, operand

operations to run:
add, subtract, multiply, divide

*/

const add = '+', subtract = '-', multiply = '×', divide = '÷';

function addition(num1, num2) { return num1 + num2; }

function subtraction(num1, num2) { return num1 - num2; }

function multiplication(num1, num2) { return num1 * num2; }

function division(num1, num2) { return num2 === 0 ? 'Math Error: Division by zero' : num1 / num2; }

function operate(num1, operand, num2) {
    switch (operand) {
        case add:
            return addition(num1, num2);
        case subtract:
            return subtraction(num1, num2);
        case multiply:
            return multiplication(num1, num2);
        case divide:
            return division(num1, num2);
    }
}

console.log(operate(2, '÷', 0));

