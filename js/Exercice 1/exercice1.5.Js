const readlineSync = require("readline-sync");

let nbr1 = readlineSync.question("give me a number decimal?");
let nbr2 = readlineSync.question("give me a number decimal?");

console.log(Math.trunc(nbr1) * nbr2)