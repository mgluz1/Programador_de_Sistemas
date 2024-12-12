// 17. Desafio Verifique se uma string contém apenas números.
function verificaNumero(num) {
    return /^[0-9]+$/.test(num);
}
console.log(verificaNumero("12345"));
console.log(verificaNumero("abc123"));
console.log(verificaNumero("67890"));
