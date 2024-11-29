function separarFrase(frase, separador) {
    return frase.split(separador);
}

const frase1 = "O rato roeu a roupa do rei de Roma";
const frase2 = "JavaScript é muito fácil!";
const frase3 = "Eu gosto de programar";

console.log(separarFrase(frase1, " "));
console.log(separarFrase(frase2, " ")); 
console.log(separarFrase(frase3, " ")); 
