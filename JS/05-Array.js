console.clear();

/*
ARRAY (sarasas, listas, masyvas, matrica)
- rekomenduotina laikyti homnogeniska informacija
- galima laikyti ir skirtingu tipu informacija sarase

*/

const empty = [];
const marks = [10, 2, 8, 4, 6];
const names = ['Petras', 'Maryte', 'Jonas', 'Ona'];
const chaos = [true, 7, 'asd', -3.14, 'ewrtg', false, []];

console.log(empty);
console.log(marks);
console.log(names);
console.log(chaos);

const pazymiai = [5, 7, 8, 3, 9, 10, 4];
let suma = 0;
pazymiai.forEach(a => {
    suma += a;
});

console.log(suma);

const vidurkis = suma / pazymiai.length;

console.log(vidurkis);

const jonas = [];
jonas.push(10);

const veg = ['agurkas', 'bulve', 'pomidoras', 'bananai'];

const sakinys = 'Reikia nupirkti: ' + veg.join(', ') + '.';
console.log(sakinys);