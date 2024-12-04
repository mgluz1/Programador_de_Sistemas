var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var r = Number(lines[0]);
var pi = 3.14159;
var a = (pi * r ** 2).toFixed(4);

console.log('A=' +a);