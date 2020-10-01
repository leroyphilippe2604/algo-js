const readlineSync = require("readline-sync");

let age = readlineSync.question('your age ?');

if (age >= 18){
    console.log ('you are a adult')
} else if (age <= 17)
    console.log ('You are not yet an adult')
