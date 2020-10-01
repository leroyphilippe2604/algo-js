const readlineSync = require("readline-sync");

let pick = new Number(readlineSync.question('Can you give me your favorite number ? '));

while (pick != 42 ) {
    pick = new Number (readlineSync.question('Are you sur ? try again'));
}

console.log(' GOOD JOB ')