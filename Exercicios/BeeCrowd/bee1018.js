var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var notas = [100, 50, 20 , 10, 5, 2, 1];
var N = Number(lines[0]);
console.log(N);

let m1 = N / notas[0];
let m2 = N / notas[1];
let m3 = N / notas[2];
let m4 = N / notas[3];
let m5 = N / notas[4];
let m6 = N / notas[5];
let m7 = N / notas[6];

console.log(`${Math.floor(m1)} nota (s) de R$ 100,00`);