// 15. Desafio calcule a média de array.
const array1 = [3, 7, 9, 10, 13];
const initialValue = 0;
const soma = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
const media = soma % 5

console.log(media);