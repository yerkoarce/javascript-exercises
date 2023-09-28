const removeFromArray = function(array , ...args) {
    let newArray = [];
    array.forEach((item) => {    // por cada elemento item en array se ejecuta el codigo
        if (!args.includes(item)){ //si item no esta en args 
            newArray.push(item);   //lo agrega a la nueva array
        }
    });

    return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
