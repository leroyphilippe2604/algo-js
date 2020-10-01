const readlineSync = require("readline-sync");

let pick = new Number(readlineSync.question ('number between 1 and  7:'));

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log(`Your pick was ${pick} and it is related to ${days[pick-1]}`);
