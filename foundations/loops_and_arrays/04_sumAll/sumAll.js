const sumAll = function(first, second) {
  let numbers = [];
  if (first > second){
    for (var i = second; i <= first; i++) {
        numbers.push(i);
      }
  } else if(first < second){
    for (var i = first; i <= second; i++) {
      numbers.push(i);
    }
  } else if (first <= 0 || second <= 0){
    numbers = "ERROR"
  }


  let total = numbers.reduce((start, finish) => {
    return start + finish;
  })
  return total;
};

// Do not edit below this line
module.exports = sumAll;
