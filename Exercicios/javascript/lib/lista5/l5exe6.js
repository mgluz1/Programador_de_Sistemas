function separarLinha(letras, separador) {
    return letras.split(separador);
}

const lista1 = "JavaScript";
const lista2 = "Eu gosto de programar"
const lista3 = "Olá, Mundo!"

console.log(separarLinha(lista1, ''));
console.log(separarLinha(lista2, ''));
console.log(separarLinha(lista3, ''));