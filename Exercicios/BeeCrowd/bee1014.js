var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var X = Number(lines[0]);
var Y = Number(lines[1]);
var c = X/Y

console.log(`${c.toFixed(3)} km/l`)