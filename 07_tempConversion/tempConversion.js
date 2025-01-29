const convertToCelsius = function(temperatureInFahrenheit) {
  let tempConvertedToCelsius = parseFloat((temperatureInFahrenheit - 32) * (5/9));
  return parseFloat(tempConvertedToCelsius.toFixed(1));
};

const convertToFahrenheit = function(temperatureInCelsius) {
  let tempConvertedToFahrenheit = parseFloat((temperatureInCelsius) * (9/5) + 32);
  return parseFloat(tempConvertedToFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
