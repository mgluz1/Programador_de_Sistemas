var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split(' ');

console.log(lines)

let a = parseFloat(lines[0]);
let b = parseFloat(lines[1]);
let c = parseFloat(lines[2]);

console.log(a, b ,c)

const pi = 3.14159;

var aT = (a * c) / 2;
var aC = pi * c ** 2;
var aTR = (a + b) * c / 2;
var aQ = b ** 2;
var aR = a * b;

console.log(`TRIANGULO: ${aT.toFixed(3)}`);
console.log(`CIRCULO: ${aC.toFixed(3)}`);
console.log(`TRAPEZIO: ${aTR.toFixed(3)}`);
console.log(`QUADRADO: ${aQ.toFixed(3)}`);
console.log(`RETANGULO: ${aR.toFixed(3)}`);