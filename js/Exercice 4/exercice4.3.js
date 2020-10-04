const readlineSync = require("readline-sync");

let random = new Number(
  readlineSync.question("How many random numbers do you want ?")
);

function rand10() {
  return Math.floor(Math.random() * 10) + 1;
}

function mutlirand10(n) {
  let Arraynbr = [];
  for (i = 0; i < n; i++) {
    Arraynbr.push(rand10());
  }
  return Arraynbr;
}

console.log(mutlirand10(random));
