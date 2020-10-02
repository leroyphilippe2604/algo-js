const readlineSync = require("readline-sync");

let numberArray = [1, 2, 3, 4, 5,];

let numberArray2 =[101, 102, 103];

let nbrtotal2 = 0

let nbrtotal = 0

for (i = 0; i < numberArray.length; i += 1) {
    nbrtotal += numberArray[i];
}

for(i = 0; i < numberArray2.length; i+= 1){
    nbrtotal2 += numberArray2[i];
}

console.log(nbrtotal)
console.log(nbrtotal2)
