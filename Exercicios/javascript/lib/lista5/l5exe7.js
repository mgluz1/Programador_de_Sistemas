function separarLinha(lista, separador) {
    return lista.split(separador);
}

const lista1 = "O sol está brilhando. O céu está azul. É um ótimo dia!"
const lista2 = "Programar é divertido. Pratique todos os dias."
const lista3 = "Olá. Como vai você?"

console.log(separarLinha(lista1, ". "));
console.log(separarLinha(lista2, ". "));
console.log(separarLinha(lista3, ". "));