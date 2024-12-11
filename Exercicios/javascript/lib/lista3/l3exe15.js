const array1 = [3, 7, 9, 10, 13];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const soma = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);
const media = soma % 5

console.log(media);