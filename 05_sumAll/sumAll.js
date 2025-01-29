const sumAll = function(num1, num2) {
    let sum = 0;
    //Corrobates if the input numbers are positive integers. If not, it returns 'ERROR'.
    if (num1 < 0 || num2 < 0 || typeof num1 != 'number' && isNaN(num1) || typeof num2 != 'number' && isNaN(num2) || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR';
    }
    if (num1 > num2){
        let newNum1 = num2;
        num2 = num1;
        num1 = newNum1;
    }
    for (let i = num1; i <= num2; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
