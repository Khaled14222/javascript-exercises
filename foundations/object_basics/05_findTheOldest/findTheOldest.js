const findTheOldest = function(arr) {
  let personAge ={
    name:"",
    age: 0,
  }
  for(let key in arr){
    let oldestName = arr[key].name;  
    let oldestAge = arr[key].yearOfDeath-arr[key].yearOfBirth;

    if(oldestAge > personAge.age){
      personAge.name = oldestName;
      personAge.age = oldestAge;
    }
  }
  return personAge;
};

// Do not edit below this line
module.exports = findTheOldest;
