const repeatString = function(string,num) {
  let results ="";
  if(num < 0){
    results = "ERROR"
  } else{
    for(let i=0; i < num; i++){
      results = results + string
      }
  }
  return results;
}

// Do not edit below this line
module.exports = repeatString;
