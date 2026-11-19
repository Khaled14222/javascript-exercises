const findTheOldest = function(arr) {
  let results = [];
  let Born = [];
  let death = [];
  for(let key in arr){
    Born.push(arr[key].yearOfBirth)
    death.push(arr[key].yearOfDeath)
  }
  console.log(Born)
  console.log(death)
  
    results.push({
    Born: Born,
    death: death
    })
  
   console.log(results)
  
  let age = [];
  for(let prop in results){
    age = results[prop].Born-results[prop].death[prop]
  }

  return age;
};
// Do not edit below this line
module.exports = findTheOldest;
