var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let xy1 = lines[0].split(' ');                       
var x1 = parseFloat(xy1[0]);
var y1 = parseFloat(xy1[1]);

let xy2 = lines[1].split(' ');
var x2 = parseFloat(xy2[0]);
var y2 = parseFloat(xy2[1]);

var D = (((x2 - x1) ** 2) + ((y2 - y1) ** 2)) ** (1 / 2);
        
console.log(`${D.toFixed(4)}`);
