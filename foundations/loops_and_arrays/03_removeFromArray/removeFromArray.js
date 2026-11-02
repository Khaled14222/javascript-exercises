const removeFromArray = function(arr, ...num) {
  for (let i = 0; i < arr.length; i++) {
    if(num.indexOf(arr[i]) !== -1){
      arr.splice(i, 1)
      i =0;
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
