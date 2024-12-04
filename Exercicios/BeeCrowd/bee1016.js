var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var d = Number(lines[0]);
var tempo = d * 2
console.log(`${tempo} minutos`)