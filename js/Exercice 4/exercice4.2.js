const readlineSync = require("readline-sync");

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(getRandomArbitrary(1, 10));

//ceci est la methode la plus correcte mais offre des reponses avec des nombres decimaux

//function rand10() {
//return Math.floor(Math.random() * 10) +1;
//}

//console.log(rand10)
// cette methode permet de n avoir que des chiffres entiers
