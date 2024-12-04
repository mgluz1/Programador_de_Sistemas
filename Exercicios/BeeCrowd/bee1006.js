var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);

var pA = 2;
var pB = 3;
var pC = 5;

var MEDIA = (a * pA + b * pB + c * pC)/(pA + pB + pC);

console.log('MEDIA = '+MEDIA.toFixed(1));