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
let aaa = '';
let ooo = '';
let str = '';
const lcd = document.querySelector('h1');
function updateLcd()
{
    lcd.textContent = str;
}
// key_evaluate.style.backgroundColor = "rgb(133, 185, 186)";


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

        case '%':
            result = modulo(a, b);
            break;
    
        default:
            break;
    }

    return result.toString();
}
function add(a, b)      { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b)   { return a / b; }
function modulo(a, b)   { return a % b; }

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

keyMouseClickEventHandlers();
function keyMouseClickEventHandlers() {
    key_ac       .addEventListener('click', mouseClickKeyAc);
    key_modulo   .addEventListener('click', mouseClickKeyModulo);
    key_delete   .addEventListener('click', mouseClickKeyDelete);
    key_divide   .addEventListener('click', mouseClickKeyDivide);
    key_seven    .addEventListener('click', mouseClickKeySeven);
    key_eight    .addEventListener('click', mouseClickKeyEight);
    key_nine     .addEventListener('click', mouseClickKeyNine);
    key_multiply .addEventListener('click', mouseClickKeyMultiply);
    key_four     .addEventListener('click', mouseClickKeyFour);
    key_five     .addEventListener('click', mouseClickKeyFive);
    key_six      .addEventListener('click', mouseClickKeySix);
    key_subtract .addEventListener('click', mouseClickKeySubtract);
    key_one      .addEventListener('click', mouseClickKeyOne);
    key_two      .addEventListener('click', mouseClickKeyTwo);
    key_three    .addEventListener('click', mouseClickKeyThree);
    key_add      .addEventListener('click', mouseClickKeyAdd);
    key_zero     .addEventListener('click', mouseClickKeyZero);
    key_negate   .addEventListener('click', mouseClickKeyNegate);
    key_decimal  .addEventListener('click', mouseClickKeyDecimal);
    key_evaluate .addEventListener('click', mouseClickKeyEvaluate);

    key_ac       .addEventListener('click', updateLcd);
    key_modulo   .addEventListener('click', updateLcd);
    key_delete   .addEventListener('click', updateLcd);
    key_divide   .addEventListener('click', updateLcd);
    key_seven    .addEventListener('click', updateLcd);
    key_eight    .addEventListener('click', updateLcd);
    key_nine     .addEventListener('click', updateLcd);
    key_multiply .addEventListener('click', updateLcd);
    key_four     .addEventListener('click', updateLcd);
    key_five     .addEventListener('click', updateLcd);
    key_six      .addEventListener('click', updateLcd);
    key_subtract .addEventListener('click', updateLcd);
    key_one      .addEventListener('click', updateLcd);
    key_two      .addEventListener('click', updateLcd);
    key_three    .addEventListener('click', updateLcd);
    key_add      .addEventListener('click', updateLcd);
    key_zero     .addEventListener('click', updateLcd);
    key_negate   .addEventListener('click', updateLcd);
    key_decimal  .addEventListener('click', updateLcd);
    key_evaluate .addEventListener('click', updateLcd);
}


function mouseClickKeyOne(e)   { str += '1'; }
function mouseClickKeyTwo(e)   { str += '2'; }
function mouseClickKeyThree(e) { str += '3'; }
function mouseClickKeyFour(e)  { str += '4'; }
function mouseClickKeyFive(e)  { str += '5'; }
function mouseClickKeySix(e)   { str += '6'; }
function mouseClickKeySeven(e) { str += '7'; }
function mouseClickKeyEight(e) { str += '8'; }
function mouseClickKeyNine(e)  { str += '9'; }
function mouseClickKeyZero(e)  { str += '0'; }

function mouseClickKeyAdd(e)      { 
    aaa = str;    
    str = '';    
    ooo = '+'; 
}
function mouseClickKeySubtract(e) { aaa = str;    str = '';    ooo = '-'; }
function mouseClickKeyMultiply(e) { aaa = str;    str = '';    ooo = '*'; }
function mouseClickKeyDivide(e)   { aaa = str;    str = '';    ooo = '/'; }
function mouseClickKeyModulo(e)   { aaa = str;    str = '';    ooo = '%'; }
function mouseClickKeyAc(e)       { aaa = '';     str = '';    ooo = ''; }

function mouseClickKeyDelete(e)   { str = str.slice(0, str.length - 1);}
function mouseClickKeyNegate(e) {     
    if (parseFloat(str) > 0)
        str = '-' + str;
    else if (parseFloat(str) < 0)
        str = str.slice(1);
}
function mouseClickKeyDecimal(e) {
    if (!str.includes('.'))
    {
        if (str.length > 0)
            str += '.';
        else
            str += '0.';
    }
}
function mouseClickKeyEvaluate(e) {
    if (str != '' && aaa != '' && ooo != '') {
        str = operate(ooo, parseFloat(aaa), parseFloat(str));
        ooo = '';
        aaa = '';
    }
}