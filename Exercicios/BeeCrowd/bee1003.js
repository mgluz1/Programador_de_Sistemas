var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var A = Number (lines[0]);
var B = Number (lines[1]);
var SOMA = (A + B);

console.log('SOMA = '+SOMA);