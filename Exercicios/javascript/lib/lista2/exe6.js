// 6. Escreva uma função que retorne o resultado da divisão inteira entre dois números inteiros.
function divisao (x, y) { 
    var n1 = (x);
    var n2 = (y);
           
    result = Math.floor(x / y);
  
    return result;
  }
  console.log(divisao(10, 3));
  console.log(divisao(9, 3));
  console.log(divisao(9, 2));
  console.log(divisao(7, 5));
  console.log(divisao(0, 5));