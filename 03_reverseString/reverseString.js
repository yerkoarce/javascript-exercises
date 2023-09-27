const reverseString = function(string) {
    let arr = string.split('');
    let reverseArr = [];
    for (const leter of arr){
        reverseArr.unshift(leter);
    }
    let newString = reverseArr.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
