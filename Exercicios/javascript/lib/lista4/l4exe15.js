// 15. Inverta uma string.
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log(reverseString("abc"));