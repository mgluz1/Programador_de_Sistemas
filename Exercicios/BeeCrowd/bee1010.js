var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

// var p1 = lines[0].split(' ');
// var q1 = Number(p1[1]);
// var v1 = Number(p1[2]);

// var p2 = lines[1].split(' ');
// var q2 = Number(p2[1]);
// var v2 = Number(p2[2]);

// var total = q1 * v1 + q2 * v2;

// console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
const [_c1, qtd1, valor1] = lines[0].split(' ').map(Number);
const [_c2, qtd2, valor2] = lines[1].split(' ').map(Number);
var total = qtd1 * valor1 + qtd2 * valor2;
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);