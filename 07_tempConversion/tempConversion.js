const convertToCelsius = function(temp) {
  let celsius = ((temp - 32) * (5 / 9));
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let far = (temp * (9 / 5) + 32);
  return Number(far.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
