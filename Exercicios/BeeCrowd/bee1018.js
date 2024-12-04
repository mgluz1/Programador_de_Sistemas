var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var N = Number(lines[0]);

let m1 = Math.floor(N / 100);
N %= 100;
let m2 = Math.floor(N / 50);
N %= 50;
let m3 = Math.floor(N / 20);
N %= 20;
let m4 = Math.floor(N / 10);
N %= 10;
let m5 = Math.floor(N / 5);
N %= 5;
let m6 = Math.floor(N / 2);
N %= 2;

console.log('NOTAS:');
console.log(`${m1} nota(s) de R$ 100,00`);
console.log(`${m2} nota(s) de R$ 50,00`);
console.log(`${m3} nota(s) de R$ 20,00`);
console.log(`${m4} nota(s) de R$ 10,00`);
console.log(`${m5} nota(s) de R$ 5,00`);
console.log(`${m6} nota(s) de R$ 2,00`);

let m7 = Math.floor(N / 1);
N %= 1;
let m8 = Math.floor(N / 0.50);
N %= 0.50;
let m9 = Math.floor(N / 0.25);
N %= 0.25;
let m10 = Math.floor(N / 0.10);
N %= 0.10;
let m11 = Math.floor(N / 0.05);
N %= 0.05;
let m12 = Math.floor(N / 0.01);
N %= 0.01;

console.log('MOEDAS:');
console.log(`${m7} moeda(s) de R$ 1,00`);
console.log(`${m8} moeda(s) de R$ 0,50`);
console.log(`${m9} moeda(s) de R$ 0,25`);
console.log(`${m10} moeda(s) de R$ 0,10`);
console.log(`${m11} moeda(s) de R$ 0,05`);
console.log(`${m12} moeda(s) de R$ 0,01`);