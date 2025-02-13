const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(arr) {
  if (arr[0]=== undefined){
    return 0;
  }
	return arr.reduce((acc, act) => {
    return acc + act;
  })
};

const multiply = function(arr) {
  return arr.reduce((acc, act) => {
    return acc * act;
  })
};

const power = function(num1, numPower) {
	let power = 1;
  for (let i = 1; i <= numPower; i++){
    power *= num1;
  }
  return power;
};

const factorial = function(num1) {
  let fact = 1;  
  for (let i = num1; i >= 1; i--){
    fact *= i; 
  }
	return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
