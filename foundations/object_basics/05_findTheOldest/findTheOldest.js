const findTheOldest = function(arr) {
  let personAge ={
    name:"",
    age: 0,
  }
  for(let key in arr){
    personAge.name = arr[key].name;  
    personAge.age = arr[key].yearOfDeath-arr[key].yearOfBirth,
    console.log(personAge);
  }
};

// Do not edit below this line
module.exports = findTheOldest;
