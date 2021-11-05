import {add} from './math-utils.js';
import {subtract} from './math-utils.js';
import {multiply} from './math-utils.js';
import {divide} from './math-utils.js';
// initialize state
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

console.log(addInput1);
console.log(addInput2);
console.log (addButton);
console.log(addResult);

// set event listeners 
addButton.addEventListener('click', () => {
  const number1 = +addInput1.value;
  const number2 = +addInput2.value;
  const result = add(number1, number2);
  addResult.textContent = result;
});

const subtractInput1 = document.getElementById('subtract-input-1');
const subtractInput2 = document.getElementById('subtract-input-2');
const subtractButton = document.getElementById('subtract-button');
const subtractResult = document.getElementById('subtract-result');

subtractButton.addEventListener('click', () => {
  const number1 = +subtractInput1.value;
  const number2 = +subtractInput2.value;
  const result = subtract(number1, number2);
  subtractResult.textContent = result;
});

const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResult = document.getElementById('multiply-result');

multiplyButton.addEventListener('click', () => {
  const number1 = +multiplyInput1.value;
  const number2 = +multiplyInput2.value;
  const result = multiply(number1, number2);
  multiplyResult.textContent = result;
});

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideResult = document.getElementById('divide-result');

divideButton.addEventListener('click', () => {
  const number1 = +divideInput1.value;
  const number2 = +divideInput2.value;
  const result = divide(number1, number2);
  divideResult.textContent = result;
});
