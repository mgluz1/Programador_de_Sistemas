// 1. Classifique um aluno como "Aprovado" ou "Reprovado" de acordo com sua média:
export function avaliar(media) {
    if (media >= 7.000){
        return "Aprovado"
    } else
    return "Reprovado"
}
// 2. Verifique se um número é ímpar ou par
export function parOuImpar(par) {
    if (par % 2 === 0) {
        return "Par"
    } else
    return "impar"
}
// 3. Verifique se um número é positivo, negativo ou zero
export function positivoOuNegativo(positivo) {
    if (positivo > 0) {
        return "Positivo"
    } else if (positivo == 0) {
    return "Zero"
    } else 
    return "Negativo"
}
// 4. Encontre o menor de três números utilizando apenas estruturas de controle (i.e. sem utilizar 
// a biblioteca Math)
export function obterMenor(a,b,c) {
    let menor
    if (a < b) {
        menor = a
    } else {
        menor = b
    }
    if (c < menor) {
        menor = c
    } else{
        menor = menor
    }
     

    return menor
}
// 5. Encontre o maior de três números utilizando apenas estruturas de controle (i.e. sem utilizar 
// a biblioteca Math)
export function obterMaior(a,b,c) {
    let maior
    if (a > b) {
        maior = a
    } else {
        maior = b
    }
    if (c > maior) {
        maior = c
    } else{
        maior = maior
    }
     
   return maior
}
// 6. Verifique se dois números são múltiplos
export function multiplos(n1,n2) {
    if (n1 % n2 === 0) {
        return "True"
    } else {
        return "False"
    }
}
// 7. Desafio Verifique se um ano é bissexto
export function verificarAnoBissexto(ano) {
    if(ano % 400 === 0) return true;
    if(ano % 100 === 0) return false;
    if(ano %   4 === 0) return true;
    return false;
}
// 8. Desafio Verifique se um caractere é uma vogal ou consoante
export function letra(vogal) {
    if (vogal == "a" || vogal == "e" || vogal == "i" || vogal == "u" || vogal == "o" ) {
        return "Vogal"
    } else {
        return "Consoante"
    }
}
// 9. Determine o valor de uma nota utilizando o sistema alfabético (A-F) à partir da
// porcentagem de aproveitamento de um aluno (0 a 100%), conforme ilustrado na tabela
// abaixo:
export function nota(valor) {
    if (valor >= 90) {
        return "A"
    } else if (valor >= 80 && valor <= 89) {
        return "B"
    } else if (valor >= 70 && valor <= 79) {
        return "C"
    }else if (valor >= 60 && valor <= 69) {
        return "D"
    } else {
        return "F"
    }
}
// 10. Calcule a soma de todos os números até N
export function soma(n) {
    var x = 0
    var y = 0
    while (x < n ) {
 
    var x = x + 1
    
 var y = y + x
 console.log(y)

 return y
 }
}
// 11. Calcule o fatorial de um número
export function fatorial(n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(fatorial(5));
// 12. Crie um procedimento que, dado um número, imprima a tabuada da multiplicação
export function tabuada(n) {
    for (var x = 0; x <= 10; x ++ ) {
    
   var n2 = n * x
  let linha = `${n} x ${x} = ${n2}`

  console.log(linha)


 }}
// 13. Desafio Crie um procedimento que imprima a TODA tabuada da multiplicação
export function tabuadaCompleta() {

    for (var x = 1; x <= 10; x ++ ) {
        
       for (var n = 1; n <= 10; n++) {
            
     var n2 = n * x 
     let linha = `${x} x ${n} = ${n2}`
    
     console.log(linha)
    }
    
    }    
  }
// 14. Desafio Verifique se um número é primo
export function encontrarPrimo(np) {
    if(np < 2) return false;
for(var div = 2; div < np; div++) {
    if(np % div === 0) {
        return false
    }
  }
            return true;
}