// 16. Desafio Verifique se uma string é um palíndromo.
function palimdromo(str) {
    const normalizedStr = str.replace(/[\W_]/g, "").toLowerCase();
    return normalizedStr === normalizedStr.split("").reverse().join("");
}
console.log(palimdromo("racecar"));
console.log(palimdromo("hello"));
console.log(palimdromo("madam"));

// var str = "12345";
// var reversedStr = [].map
//   .call(str, function (x) {
//     return x;
//   })
//   .reverse()
//   .join("");

// // Exibindo a string invertida
// console.log(reversedStr); // '54321'

// // Verificando se é um palíndromo
// if (str === reversedStr) {
//   console.log(`${str} é um palíndromo.`);
// } else {
//   console.log(`${str} não é um palíndromo.`);