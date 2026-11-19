const findTheOldest = function(arr) {
  let CurrentDate = 2026;
  let personAge ={
    name:"",
    age: 0,
  }
  for(let key in arr){
    let oldestAge;
    let oldestName = arr[key].name; 
    if(arr[key].yearOfDeath == undefined){
      oldestAge = CurrentDate-arr[key].yearOfBirth;
    } else{
      oldestAge = arr[key].yearOfDeath-arr[key].yearOfBirth;
    }

    if(oldestAge > personAge.age){
      personAge.name = oldestName;
      personAge.age = oldestAge;
    }
  }
  return personAge;
};

// Do not edit below this line
module.exports = findTheOldest;
