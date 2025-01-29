const removeFromArray = function(array, ...elementsToRemove) {
    const arrayRemoved = [];
    for (let element of array){
        if (!elementsToRemove.includes(element)){
            arrayRemoved.push(element);
        }
    }
    return arrayRemoved;
};

// Do not edit below this line
module.exports = removeFromArray;
