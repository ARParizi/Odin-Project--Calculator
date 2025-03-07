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
const key_decimal  = document.querySelector('.key.decimal-point');
const key_evaluate = document.querySelector('.key.evaluate');

// key_evaluate.style.backgroundColor = "rgb(133, 185, 186)";
let aa ,bb = 0;
let oo = '';
let lcd = '';

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

overKeyMouseMoveEventHandlers();
function overKeyMouseMoveEventHandlers() {
    key_ac       .addEventListener('mouseover', mouseOver);
    key_modulo   .addEventListener('mouseover', mouseOver);
    key_delete   .addEventListener('mouseover', mouseOver);
    key_divide   .addEventListener('mouseover', mouseOver);
    key_seven    .addEventListener('mouseover', mouseOver);
    key_eight    .addEventListener('mouseover', mouseOver);
    key_nine     .addEventListener('mouseover', mouseOver);
    key_multiply .addEventListener('mouseover', mouseOver);
    key_four     .addEventListener('mouseover', mouseOver);
    key_five     .addEventListener('mouseover', mouseOver);
    key_six      .addEventListener('mouseover', mouseOver);
    key_subtract .addEventListener('mouseover', mouseOver);
    key_one      .addEventListener('mouseover', mouseOver);
    key_two      .addEventListener('mouseover', mouseOver);
    key_three    .addEventListener('mouseover', mouseOver);
    key_add      .addEventListener('mouseover', mouseOver);
    key_zero     .addEventListener('mouseover', mouseOver);
    key_negate   .addEventListener('mouseover', mouseOver);
    key_decimal  .addEventListener('mouseover', mouseOver);
    key_evaluate .addEventListener('mouseover', mouseOver);

    key_ac       .addEventListener('mouseout', mouseOut);
    key_modulo   .addEventListener('mouseout', mouseOut);
    key_delete   .addEventListener('mouseout', mouseOut);
    key_divide   .addEventListener('mouseout', mouseOut);
    key_seven    .addEventListener('mouseout', mouseOut);
    key_eight    .addEventListener('mouseout', mouseOut);
    key_nine     .addEventListener('mouseout', mouseOut);
    key_multiply .addEventListener('mouseout', mouseOut);
    key_four     .addEventListener('mouseout', mouseOut);
    key_five     .addEventListener('mouseout', mouseOut);
    key_six      .addEventListener('mouseout', mouseOut);
    key_subtract .addEventListener('mouseout', mouseOut);
    key_one      .addEventListener('mouseout', mouseOut);
    key_two      .addEventListener('mouseout', mouseOut);
    key_three    .addEventListener('mouseout', mouseOut);
    key_add      .addEventListener('mouseout', mouseOut);
    key_zero     .addEventListener('mouseout', mouseOut);
    key_negate   .addEventListener('mouseout', mouseOut);
    key_decimal  .addEventListener('mouseout', mouseOut);
    key_evaluate .addEventListener('mouseout', mouseOut);
}
function mouseOver(e) { this.classList.add("key-mouse-over"); }
function mouseOut(e)  { this.classList.remove("key-mouse-over"); }
