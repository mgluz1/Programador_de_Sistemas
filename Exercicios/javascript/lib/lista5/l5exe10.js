function separarLinha(linha, separador) {
    return linha.split(separador);
}

const linha1 = "Primeira linha\nSegunda linha\nTerceira linha"

const linha2 = "Linha única sem quebras"

console.log(separarLinha(linha1, '\n'));
console.log(separarLinha(linha2, ' '));