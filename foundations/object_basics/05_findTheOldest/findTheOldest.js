const findTheOldest = function(arr) {
  let results = [];
  let Born = [];
  let death = [];
  for(let key in arr){
    Born.push(arr[key].yearOfBirth)
    death.push(arr[key].yearOfDeath)
  }
  results.push(Born, death)
  return results
};

// Do not edit below this line
module.exports = findTheOldest;
