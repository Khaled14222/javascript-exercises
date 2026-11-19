const findTheOldest = function(arr) {
  for(let key in arr){
    arr[key].yearOfBirth-arr[key].yearOfDeath;
  }
};

// Do not edit below this line
module.exports = findTheOldest;
