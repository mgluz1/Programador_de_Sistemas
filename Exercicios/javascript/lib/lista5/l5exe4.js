function separarCaminhos(textos, separador) {
    return  textos.split(separador);
}

const textos1 = "Nome -- Sobrenome -- Idade -- País"
const textos2 = "Item 1 -- Item 2 -- Item 3 -- Item 4"
const textos3 = "Rua A -- Bairro B -- Cidade C -- Estado D"

console.log(separarCaminhos(caminhos1,"--"));
console.log(separarCaminhos(textos2,"--"));
console.log(separarCaminhos(textos3,"--"));
