var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var nome = parseFloat(lines[0]);
var s = parseFloat(lines[1]);
var v = parseFloat(lines[2]);
var c = v * 0.15;
var total = s + c;

console.log(`TOTAL = R$ ${total.toFixed(2)}`);