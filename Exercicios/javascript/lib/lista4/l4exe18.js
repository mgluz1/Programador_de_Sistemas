// 18. Desafio Conte o número de vogais em uma string
function vogais(input) {
    return input.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length;
  }
console.log(vogais("hello"));
console.log(vogais("javascript"));
console.log(vogais("aeiou"));