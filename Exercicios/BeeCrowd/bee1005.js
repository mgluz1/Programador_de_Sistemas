var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);

var pA = 3.5;
var pB = 7.5;

var MEDIA = (a * pA + b * pB)/(pA + pB);

console.log('MEDIA = '+MEDIA.toFixed(5));