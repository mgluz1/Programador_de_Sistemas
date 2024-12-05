var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var f = Number(lines[0]);
var h = Number(lines[1]);
var v = Number(lines[2]);
var s = v * h

console.log(`NUMBER = ${f}\nSALARY = U$ ${s.toFixed(2)}`);