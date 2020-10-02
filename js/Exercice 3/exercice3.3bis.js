const readlineSync = require("readline-sync");

let nbrArray =[1, 2, 3, 4, 5];
let duplicateArray = [];

for (i = 0; i < nbrArray.length; i++) {
    duplicateArray.push(nbrArray[i]);
}

console.log(duplicateArray)


let duplicateArrayTwo = [];

duplicateArrayTwo = nbrArray.slice(0);

console.log(duplicateArrayTwo);