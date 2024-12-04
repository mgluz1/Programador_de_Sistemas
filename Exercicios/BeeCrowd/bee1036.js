var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var abc = lines[0].split(' ');
var a = parseFloat(abc[0]);

if (a === 0) {
    console.log("Impossivel calcular");

} else {

var b = parseFloat(abc[1]);
var c = parseFloat(abc[2]);

var D = b * b - 4 * a * c;

if (D < 0) {
    console.log("Impossivel calcular");

} else {

var R1 = (-b + Math.sqrt(D)) / (2 * a);
var R2 = (-b - Math.sqrt(D)) / (2 * a);

console.log(`R1 = ${R1.toFixed(5)}`);
console.log(`R2 = ${R2.toFixed(5)}`);
 }
}

// var abc = lines[0].split(' ');
// var a = parseFloat(abc[0]);
// var b = parseFloat(abc[1]);
// var c = parseFloat(abc[2]);
// var D = b * b - 4 * a * c;

// if (a === 0 || (b * b - 4 * a * c) < 0) {
//     console.log("Impossivel calcular");
// } else {

// var R1 = (-b + Math.sqrt(D)) / (2 * a);
// var R2 = (-b - Math.sqrt(D)) / (2 * a);

// console.log(`R1 = ${R1.toFixed(5)}`);
// console.log(`R2 = ${R2.toFixed(5)}`);
//  }