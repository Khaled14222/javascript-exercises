const sumAll = function(first, second) {
  let numbers = [];
  for (var i = first; i <= second; i++) {
    numbers.push(i);
  }
  let total = numbers.reduce((start, finish) => {
    return start + finish;
  })
  return total;
};

// Do not edit below this line
module.exports = sumAll;
