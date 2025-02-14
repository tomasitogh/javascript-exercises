const findTheOldest = function(arr) {
    return arr.reduce((oldestPerson, currentPerson) => {
        const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        if (oldestAge > currentAge){
            return oldestPerson;
        }else {
            return currentPerson;
        }
    })
};
function getAge(birthDate, deathDate){
    if (deathDate == null){
        deathDate = new Date().getFullYear();
    }
    return deathDate - birthDate;
}

// Do not edit below this line
module.exports = findTheOldest;
