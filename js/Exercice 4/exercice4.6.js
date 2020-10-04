const readlineSync = require("readline-sync");

let sum = 1;

function factorial(a) {
  if (a >= 1) {
    sum *= a;
    factorial(a - 1);
  }
  return sum;
}
console.log(factorial(3));
