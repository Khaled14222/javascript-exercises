const add = function(numOne, numTwo) {
	let total = numOne + numTwo;
  return total;
};

const subtract = function(numOne, numTwo) {
  let total = numOne - numTwo;
  return total;
};

const sum = function(arr) {
  let total=0;
	for(let num in arr){
    total += arr[num];
  }
  return total;
};

const multiply = function(arr) {
  let total=1;
	for(let num in arr){
    total *= arr[num];
  }
  return total;
};

const power = function(numOne, numTwo) {
  let total = numOne + numTwo;
  return total;
};

const factorial = function(numOne, numTwo) {
  let total = numOne + numTwo;
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
