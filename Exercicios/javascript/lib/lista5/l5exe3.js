function separarTempo(emails, separador) {
    return  emails.split(separador);
}

const emails1 = "fulano@gmail.com;ciclano@yahoo.com;beltrano@outlook.com"
const emails2 = "contato@empresa.com;suporte@site.com"
const emails3 = "admin@fundacao.org;info@site.org"

console.log(separarTempo(tempo1, ";"));
console.log(separarTempo(tempo, ";"));
console.log(separarTempo(tempo3, ";"));