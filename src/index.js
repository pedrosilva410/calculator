const input = document.getElementById('operationInput');

document.getElementById('zero').addEventListener('click', ()=>updateOperation('0'));
document.getElementById('one').addEventListener('click', ()=>updateOperation('1'));
document.getElementById('two').addEventListener('click', ()=>updateOperation('2'));
document.getElementById('three').addEventListener('click', ()=>updateOperation('3'));
document.getElementById('four').addEventListener('click', ()=>updateOperation('4'));
document.getElementById('five').addEventListener('click', ()=>updateOperation('5'));
document.getElementById('six').addEventListener('click', ()=>updateOperation('6'));
document.getElementById('seven').addEventListener('click', ()=>updateOperation('7'));
document.getElementById('eight').addEventListener('click', ()=>updateOperation('8'));
document.getElementById('nine').addEventListener('click', ()=>updateOperation('9'));
document.getElementById('dot').addEventListener('click', ()=>updateOperation('.'));

document.getElementById('leftParenthesis').addEventListener('click', ()=>updateOperation('('));
document.getElementById('rightParenthesis').addEventListener('click', ()=>updateOperation(')'));
document.getElementById('rest').addEventListener('click', ()=>updateOperation('%'));
document.getElementById('division').addEventListener('click', ()=>updateOperation('/'));
document.getElementById('multiplication').addEventListener('click', ()=>updateOperation('x'));
document.getElementById('minus').addEventListener('click', ()=>updateOperation('-'));
document.getElementById('plus').addEventListener('click', ()=>updateOperation('+'));
document.getElementById('allClear').addEventListener('click', ()=>allclear());

function updateOperation(operand) {
    input.value += operand;
  }

function allclear() {
    input.value='';
}