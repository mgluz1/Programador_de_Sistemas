var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var t = Number(lines[0]);
var v = Number(lines[1]);
var d = v * t
var L = d / 12;

console.log(L.toFixed(3));