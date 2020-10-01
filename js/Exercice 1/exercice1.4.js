const readlineSync = require("readline-sync");

let name = readlineSync.question('Your name please?');
let firstname = readlineSync.question('your first name?');
let city = readlineSync.question('where do you live?');

console.log(name + " " + firstname + " " + city)