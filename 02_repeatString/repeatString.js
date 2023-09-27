const repeatString = function(string , num) {
    if (num < 0){
        return 'ERROR';
    }
    let i = 1;
    let stringConcat = '';
    while (i <= num){
        stringConcat += string;
        i++;
    }
    return stringConcat;
};

// Do not edit below this line
module.exports = repeatString;
