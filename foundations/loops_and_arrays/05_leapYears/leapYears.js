const leapYears = function(year) {
  //**if year divided by 4 remains 0 then its leap year  */
  if(year%4 === 0&& year%100 != 0){
    return true;
  }else if( year%400 === 0 ){
    return true;
  }else{
    return false;
  }
  
};

// Do not edit below this line
module.exports = leapYears;
