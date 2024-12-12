var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

const verificarPar = ((num) => num % 2 === 0);
let pares = lines.map(Number).filter(verificarPar);
console.log(`${pares.length}) valores pares`);

// let pares = lines.map(Number).filter((num) => num % 2 === 0);
// console.log(`$(pares.length)) valores pares`);
