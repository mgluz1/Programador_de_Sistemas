var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var N = parseFloat(lines[0]) * 100;
N = Math.round(N);

let m1 = Math.floor(N / 10000);
N %= 10000;
let m2 = Math.floor(N / 5000);
N %= 5000;
let m3 = Math.floor(N / 2000);
N %= 2000;
let m4 = Math.floor(N / 1000);
N %= 1000;
let m5 = Math.floor(N / 500);
N %= 500;
let m6 = Math.floor(N / 200);
N %= 200;

console.log('NOTAS:');
console.log(`${m1} nota(s) de R$ 100.00`);
console.log(`${m2} nota(s) de R$ 50.00`);
console.log(`${m3} nota(s) de R$ 20.00`);
console.log(`${m4} nota(s) de R$ 10.00`);
console.log(`${m5} nota(s) de R$ 5.00`);
console.log(`${m6} nota(s) de R$ 2.00`);

let m7 = Math.floor(N / 100);
N %= 100;
let m8 = Math.floor(N / 50);
N %= 50;
let m9 = Math.floor(N / 25);
N %= 25;
let m10 = Math.floor(N / 10);
N %= 10;
let m11 = Math.floor(N / 5);
N %= 5;
let m12 = Math.floor(N / 1);
N %= 1;

console.log('MOEDAS:');
console.log(`${m7} moeda(s) de R$ 1.00`);
console.log(`${m8} moeda(s) de R$ 0.50`);
console.log(`${m9} moeda(s) de R$ 0.25`);
console.log(`${m10} moeda(s) de R$ 0.10`);
console.log(`${m11} moeda(s) de R$ 0.05`);
console.log(`${m12} moeda(s) de R$ 0.01`);