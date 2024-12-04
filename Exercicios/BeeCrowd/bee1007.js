var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var a = Number (lines[0]);
var b = Number (lines[1]);
var c = Number (lines[2]);
var d = Number (lines[3]);
 
var D = (a * b - c * d)

console.log('DIFERENCA = '+D);