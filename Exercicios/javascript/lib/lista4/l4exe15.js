// 15. Inverta uma string.
function palindr(str) {
    return str.split("").reverse().join("");
}
console.log(palindr("hello"));
console.log(palindr("world"));
console.log(palindr("abc"));