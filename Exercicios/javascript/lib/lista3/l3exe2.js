// function n(par) {
//     if (par % 2 === 0) {
//         return "Par"
//     } else
//     return "impar"
// }

const pares = lista.filter((valor) => valor % 2 === 0);
const total = lista.reduce(soma, 0);
console.log(pares);

// console.log(n(4))
// console.log(n(7))
// console.log(n(0))
// console.log(n(-5))