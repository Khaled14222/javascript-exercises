const convertToCelsius = function(temperature) {
  let c ;
  let roundedC ;
  c = (temperature - 32)*5/9;
  if(c%1 != 0){
    roundedC = c.toFixed(1);
    return Number(roundedC);
  } else {
    return c;
  }
};

const convertToFahrenheit = function(temperature) {
  let f ;
  let roundedF ;
  f = (temperature * 9/5) + 32;
  if(f%1 != 0){
    roundedF = f.toFixed(1);
    return Number(roundedF);
  } else {
    return f;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
