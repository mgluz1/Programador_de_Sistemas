function separarTempo(tempo, separador) {
    return  tempo.split(separador);
}

const tempo1 = "14:35:20"
const tempo2 = "09:05:15"
const tempo3 = "23:59:59"

console.log(separarTempo(tempo1, ":"));
console.log(separarTempo(tempo2, ":"));
console.log(separarTempo(tempo3, ":"));