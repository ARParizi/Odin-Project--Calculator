const key_ac       = document.querySelector('.key.ac');
const key_modulo   = document.querySelector('.key.modulo');
const key_delete   = document.querySelector('.key.delete');
const key_divide   = document.querySelector('.key.divide');
const key_seven    = document.querySelector('.key.seven');
const key_eight    = document.querySelector('.key.eight');
const key_nine     = document.querySelector('.key.nine');
const key_multiply = document.querySelector('.key.multiply');
const key_four     = document.querySelector('.key.four');
const key_five     = document.querySelector('.key.five');
const key_six      = document.querySelector('.key.six');
const key_subtract = document.querySelector('.key.subtract');
const key_one      = document.querySelector('.key.one');
const key_two      = document.querySelector('.key.two');
const key_three    = document.querySelector('.key.three');
const key_add      = document.querySelector('.key.add');
const key_zero     = document.querySelector('.key.zero');
const key_negate   = document.querySelector('.key.negate');
const key_decimal  = document.querySelector('.key.decimal');
const key_evaluate = document.querySelector('.key.evaluate');


let aa ,bb = 0;
let oo = '';

function operate(op, a, b)
{
    let result = 0;
    switch (op) {
        case '+':
            result = add(a, b);
            break;

        case '-':
            result = subtract(a, b);
            break;

        case '*':
            result = multiply(a, b);
            break;

        case '/':
            result = divide(a, b);
            break;
    
        default:
            break;
    }
}
function add(a, b)      { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b)   { return a / b; }
