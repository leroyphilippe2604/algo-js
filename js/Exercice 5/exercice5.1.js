const readlineSync = require("readline-sync");

const tvserie = {};

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
}
asktvserie();

console.log(tvserie);
