const convertToCelsius = function(temperature) {
  let c = 0
  c = (temperature - 32)*5/9;
  let roundedC = 0;
  if(!Number.isInteger(c)){
    roundedC = c.toFixed(1);
    return Number(roundedC);
  } else {
    return Number(roundedC);
  }
};

const convertToFahrenheit = function(temperature) {
  let f = 0
  f =(temperature * 5/9)+32;
  let roundedF = 0;
  if(!Number.isInteger(f)){
    roundedF = f.toFixed(1);
    return Number(roundedF);
  } else {
    return Number(roundedF);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
