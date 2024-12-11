// 16. Desafio Verifique se uma string é um palíndromo.
function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        return true; 
    } else {
        return false;
    }
}

console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   
console.log(isPalindrome("madam"));