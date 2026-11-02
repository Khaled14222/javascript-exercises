const sumAll = function(first, second) {
  let numbers = [];
  if (first < 0 || second < 0){
    numbers = "ERROR"
    return numbers;
  } else if (!Number.isInteger(first) || !Number.isInteger(second)){
    numbers = "ERROR"
    return numbers;
  } else if (first > second){
    for (var i = second; i <= first; i++) {
        numbers.push(i);
      }
  } else if(first < second){
    for (var i = first; i <= second; i++) {
      numbers.push(i);
    }
  }  else if(first != NaN || second != NaN){
    numbers = "ERROR"
  } 


  let total = numbers.reduce((start, finish) => {
    return start + finish;
  })
  return total;
};

// Do not edit below this line
module.exports = sumAll;



