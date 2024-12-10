// 13. Encontre o maior número em um array.
var c1 = [1, 2, 3, 4, 5]
var c2 = [-1, -2, -3, -4, -5]
var c3 = [10, 20, 30, 40, -50]

function obeterMaior(array) {
    return Math.max(...array);
}

console.log(obeterMaior(c1));
console.log(obeterMaior(c2));
console.log(obeterMaior(c3));