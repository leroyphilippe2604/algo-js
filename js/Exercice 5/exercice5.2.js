const readlineSync = require("readline-sync");

const tvserie = {};

function shuffle(a) {
  for (let i = a.lenght - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    ([a[i], a[j]] = [a[j]]), [a[i]];
  }
  return a;
}

function asktvserie() {
  tvserie.name = readlineSync.question("What is the name of tv serie ?");
  tvserie.yearofproduction = readlineSync.question(
    "what is the year of production ?"
  );
  tvserie.cast = [];

  let askcast = true;
  while ((askcast = true)) {
    let casttemp = readlineSync.question(
      "Give the name of the cast members. Enter end to stop."
    );
    if (casttemp === "end") {
      break;
    }
    tvserie.cast.push(casttemp);
  }
  return tvserie;
}

asktvserie();

function randomizecast(serie) {
  shuffle(serie.cast);
}

console.log(randomizecast);
console.log(tvserie);
