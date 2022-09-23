let input = document.getElementById('operation-input');

let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let dot = document.getElementById('dot');

let leftparenthesis = document.getElementById('leftparenthesis')
let rightparenthesis = document.getElementById('rightparenthesis')
let rest = document.getElementById('rest')
let clear = document.getElementById('allclear')
let division = document.getElementById('division')
let multiplication = document.getElementById('multiplication')
let minus = document.getElementById('minus')
let equals = document.getElementById('equals')
let plus = document.getElementById('plus')

zero.addEventListener('click', ()=>updateOperation('0'));
one.addEventListener('click', ()=>updateOperation('1'));
two.addEventListener('click', ()=>updateOperation('2'));
three.addEventListener('click', ()=>updateOperation('3'));
four.addEventListener('click', ()=>updateOperation('4'));
five.addEventListener('click', ()=>updateOperation('5'));
six.addEventListener('click', ()=>updateOperation('6'));
seven.addEventListener('click', ()=>updateOperation('7'));
eight.addEventListener('click', ()=>updateOperation('8'));
nine.addEventListener('click', ()=>updateOperation('9'));
dot.addEventListener('click', ()=>updateOperation('.'))

leftparenthesis.addEventListener('click', ()=>updateOperation('('));
rightparenthesis.addEventListener('click', ()=>updateOperation(')'));
rest.addEventListener('click', ()=>updateOperation('%'));
division.addEventListener('click', ()=>updateOperation('/'));
multiplication.addEventListener('click', ()=>updateOperation('x'));
minus.addEventListener('click', ()=>updateOperation('-'));
plus.addEventListener('click', ()=>updateOperation('+'));
clear.addEventListener('click', ()=>allclear())


function updateOperation(operand) {
    input.value=input.value+operand;
  }

function allclear() {
    input.value=''
}