const readlineSync = require("readline-sync");

function calcDistance2(ax, ay, bx, by) {
  let x = ax - bx;
  let y = ay - by;
  let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  return dist;
}
console.log(calcDistance2(1, 1, 2, 2));

function calcDistance3(ax, ay, bx, by) {
  let x = ax - bx;
  let y = ay - by;
  let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  return dist;
}
console.log(calcDistance3(1, 1, 3, 1));

function calcDistance4(ax, ay, bx, by) {
  let x = ax - bx;
  let y = ay - by;
  let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  return dist;
}
console.log(calcDistance4(4, 1, 1, 1));

function calcDistance(ax, ay, bx, by) {
  let x = ax - bx;
  let y = ay - by;
  let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
  return dist;
}

console.log(calcDistance(-2, 2, 2, -2));
