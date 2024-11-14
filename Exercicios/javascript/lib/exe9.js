// 9. Retorne o resto da divisão entre dois números
function resto (x, y) {
    var n1 = Number(x) 
    var n2 = Number(y)
    var result = n1 % n2
    return result   
}
console.log(resto(20,3));
console.log(resto(25,5));
console.log(resto(100,10));
console.log(resto(100,30));
console.log(resto(100,33));