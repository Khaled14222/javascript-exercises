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

const power = function(nOne, nTwo) {
  let total = nOne ** nTwo;
  return total;
};

const factorial = function(req) {
  let results = 1;
  for(i = 1; i <= req; i++){
    results *= i;
  }
  return results;
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
