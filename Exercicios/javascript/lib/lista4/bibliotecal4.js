// BIBLIOTECA PARA A LISTA 4
// }
// 1 a 8 sem function
// }
// 9. Calcule a soma dos números de um array.
export var soma = (a, b) => Number(a) + Number(b);
export function somaLista(Lista) {
    return Lista.reduce(soma, 0)
}
// 10. Calcule a soma dos números pares de um array.
export function somaPares(array) {
    let sum = 0;
    array.forEach((number) => {
      if (number % 2 === 0) {
        sum += number;
      }
    });
    return sum;
}
// 11. Calcule a média de um array de números.
export function calculaMedia(array) {
    if (array.length === 0) return 0; // Verifica se o array está vazio
  
    let sum = 0;
    array.forEach((number) => {
      sum += number;
    });
  
    return sum / array.length;
}
// 12. Calcule a soma dos dígitos de um número.
export function somarDigitos(num) {
    var lista = num.toString().split('');
    var soma = 0
    for (var i = 0; i < lista.length; i++) soma += Number(lista[i]);

    return soma
}
// 13. Encontre o maior número em um array.
export function obeterMaior(array) {
    return Math.max(...array);
}
// 14. Remova todos os espaços de uma string.
export function removeEspaco(str){
    return str.replaceAll(" ", "")
}
// 15. Inverta uma string.
export function palindr(str) {
    return str.split("").reverse().join("");
}
// 16. Desafio Verifique se uma string é um palíndromo.
export function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        return true; 
    } else {
        return false;
    }
}
// 17. Desafio Verifique se uma string contém apenas números.
export function verificaNumero(num) {
    if (isNaN(num))
        return "false"
}
// 18. Desafio Conte o número de vogais em uma string
export function vogais(input) {
    return input.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length;
}
// 19. Desafio Verifique se uma string é um anagrama de outra.
export function anagrama(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}