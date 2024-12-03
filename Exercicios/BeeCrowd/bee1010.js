var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var p1 = lines[0].split(' ');
var q1 = Number(p1[1]);
var v1 = Number(p1[2]);

var p2 = lines[1].split(' ');
var q2 = Number(p2[1]);
var v2 = Number(p2[2]);

var total = q1 * v1 + q2 * v2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);