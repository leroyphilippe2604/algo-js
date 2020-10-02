const readlineSync = require("readline-sync");

let numberArray = [1, 2, 3, 4, 5];

for(let i = 0; i < 5; i++){
    numberArray[i + 5] = numberArray[i];
    console.log(numberArray);
}

