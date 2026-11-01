const removeFromArray = function(arr, num) {
  let wanted = arr.indexOf(num)
  arr.splice(wanted, 1);
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
