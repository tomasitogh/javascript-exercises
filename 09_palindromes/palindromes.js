const palindromes = function (str) {
    const alphaNumeric = 'abcdefghijklmnopqrstuvwxyz1234567890';

    const cleanString = str.toLowerCase().split('').filter((char) => {
        return alphaNumeric.includes(char);
    }).join('');

    const reversedString = cleanString.split('').reverse().join('');

    return (reversedString === cleanString);

};

// Do not edit below this line
module.exports = palindromes;
