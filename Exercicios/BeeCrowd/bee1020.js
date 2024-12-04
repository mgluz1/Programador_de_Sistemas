var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var dias = Number(lines[0]);
var a = Math.floor(dias / 365);
dias %= 365;
var m = Math.floor(dias / 30);
dias %= 30;

console.log(`${a} ano(s)`);
console.log(`${m} mes(es)`);
console.log(`${dias} dia(s)`);