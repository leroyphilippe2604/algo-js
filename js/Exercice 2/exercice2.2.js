const readlineSync = require("readline-sync");

let min = new Number (readlineSync.question("give me a number min ?"));
let max = new Number (readlineSync.question("give me a number max ?"));
let current = new Number (readlineSync.question('give me a current number ?'));

if (min<currrent && max>current) {
    console.log("Your current number " + current + " is between " + min + " and " + max +".");
}
else if (min>max) {
    console.log("It's so bad your number is not correct");
}
else{
    console.log("your current number is not between your win and your max")
}