// 12. Calcule a soma dos dígitos de um número.
var c1 = 123
var c2 = 456789
var c3 = 8423416542984721

function somarDigitos(num) {
    var lista = num.toString().split('');
    var soma = 0
    for (var i = 0; i < lista.length; i++) soma += Number(lista[i]);

    return soma
}
console.log(somarDigitos(c1));
console.log(somarDigitos(c2));
console.log(somarDigitos(c3));
