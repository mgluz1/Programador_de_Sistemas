var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var pedido = lines[0].split(' ');
var codigo = parseInt(pedido[0]);
var qnt = parseInt(pedido[1]);

var p = {
    1: 4.00,
    2: 4.50,
    3: 5.00,
    4: 2.00,
    5: 1.50
};

var total = p[codigo] * qnt;
console.log(`Total: R$ ${total.toFixed(2)}`);

