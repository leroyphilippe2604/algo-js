const readlineSync = require("readline-sync");

let numberArray = [1, 2, 3, 4, 5];

let nbrtotal = 0;

let average;

for( i = 0; i < numberArray.length; i++){
    nbrtotal += numberArray[i];
}

average = nbrtotal / numberArray.length;

console.log(average)

let numberArray2 =[101, 102, 103];

let nbrtotal2 = 0;

let average2;

for(i = 0; i < numberArray2.length; i++){
    nbrtotal2 += numberArray2[i];
}

average2 = nbrtotal2 / numberArray2.length;
console.log(average2)