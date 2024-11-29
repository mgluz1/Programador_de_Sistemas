function separarCaminhos(nomes, separador) {
    return  nomes.split(separador);
}

const caminhos1 = "João,Maria,José"
const nomes2 = "Ana Maria,Paulo Coelho,Carla"

console.log(separarCaminhos(caminhos1,",")); 
console.log(separarCaminhos(nomes2,","));