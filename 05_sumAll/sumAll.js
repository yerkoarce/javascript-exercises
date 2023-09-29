const sumAll = function(a , b) {
    if (typeof a !== 'number' || typeof b !== 'number'){
        return 'ERROR';
    }
    let sum = 0;
    
    if (a < b){
        for (let i = a ; i <= b ; i++){
            sum += i;
        }
        if (sum < 0){
            return 'ERROR';
        }
        return sum;
    }else if (b < a){
        for (let i = b ; i <= a ; i++){
            sum += i;
        }
        if (sum < 0){
            return 'ERROR';
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
