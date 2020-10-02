const readlineSync = require("readline-sync");

let nbrArray = [1, 2, 56, 43, 5];
let min = nbrArray[0];
let max = nbrArray[0];

for (i = 0; i < nbrArray.length; i++) {
    if (min > nbrArray[i]){
        min = nbrArray[i];
    }
    if (max < nbrArray[i]){
        max = nbrArray[i]
    }
}

console.log (`min : ${min}`);
console.log (`max : ${max}`);