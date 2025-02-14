const fibonacci = function(num) {
    if (num < 0){
        return "OOPS";
    } else if (num == 0){
        return 0;
    }

    const fibo = [1, 1];
    for (let i = 2; i < num;i++){
        fibo[i] = fibo[i - 2] + fibo[i - 1];
    }
    return fibo[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
