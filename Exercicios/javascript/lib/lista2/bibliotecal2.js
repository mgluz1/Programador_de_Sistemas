// 2. Escreva um procedimento que solicita um nome e depois exiba um alerta com a mensagem "Olá,
// [nome]!".
export function OlaNome(nome){
  return `Ola, ${nome}`
}
// 3. Escreva uma função que recebe dois números e retorna a soma.
export function soma (x, y) { 
    var result = (x + y);
  
    return result;
  }
// 4. Escreva uma função que receba dois números e imprime o resultado da multiplicação entre os
// números.
export function produto (x, y) { 
      var result = (x * y);
  
    return result;
  }
// 5. Escreva uma função que recebe três números e retorna a média deles.
export function media (x, y, z) { 
    var result = ((x + y + z)/3);
  
    return result;
  }
// 6. Escreva uma função que retorne o resultado da divisão inteira entre dois números inteiros.
export function divisao (x, y) { 
   var result = Math.floor(x / y);
  
    return result;
  }
// 7. Escreva uma função que recebe o nome e o sobrenome ao usuário e, em seguida, escreva o nome
// completo na página.
export function nomeCompleto(nome,sobrenome){
    return `${nome} ${sobrenome}`
}
// 8. Calcule o quadrado de um número
export function quadrado(x) {
    var n1 = Number(x)
    var result = n1 ** 2
    return result
}
// 9. Retorne o resto da divisão entre dois números
export function resto (x, y) {
    var n1 = Number(x) 
    var n2 = Number(y)
    var result = n1 % n2
    return result   
}