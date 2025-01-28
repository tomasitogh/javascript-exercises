const reverseString = function(string) {
    let reverseWords = '';
    for (let i = string.length - 1; i >= 0; i--){
        reverseWords += string[i];
    }
    return reverseWords;
};

// Do not edit below this line
module.exports = reverseString;
