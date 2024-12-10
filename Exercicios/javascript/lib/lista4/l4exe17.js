// 17. Desafio Verifique se uma string contém apenas números.
// Cenário 1:
// Entrada: "12345"
// Saída Esperada: true
// Cenário 2:
// Entrada: "abc123"
// Saída Esperada: false
// Cenário 3:
// Entrada: "67890"
// Saída Esperada: true

function verificaNumero(num) {
    return /^[0-9]+$/.test(num);
}
console.log(verificaNumero("12345"));
console.log(verificaNumero("abc123"));
console.log(verificaNumero("67890"));
