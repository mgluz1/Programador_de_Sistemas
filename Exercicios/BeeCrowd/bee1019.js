var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var t = Number(lines[0]);
let h = Math.floor(t / 3600);
t %= 3600;
let m = Math.floor(t / 60);
let s = t % 60;
console.log(`${h}:${m}:${s}`);