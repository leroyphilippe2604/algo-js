const readlineSync = require("readline-sync");

let userName = readlineSync.question('Your name please?');
console.log("Hello " + userName)
