const readlineSync = require("readline-sync");

let height = new Number (readlineSync.question("what is your height ?"));
let width = new Number (readlineSync.question("what is your width ? "));

function calcSurface(w, h){
    return w * h;
}

console.log(`The surface of the rectangle is ${calcSurface(width,height)}`);