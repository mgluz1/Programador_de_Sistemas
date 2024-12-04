var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var r = parseFloat(lines[0]);
var pi = 3.14159;
var vEsfera = (4/3 * pi * r ** 3);

console.log(`VOLUME = ${vEsfera.toFixed(3)}`);