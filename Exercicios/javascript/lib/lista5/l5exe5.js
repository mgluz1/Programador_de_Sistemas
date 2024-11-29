function separarData(caminho, separador) {
    return  caminho.split(separador);
}

const caminho1 = "/usr/local/bin"
const caminho2 = "/home/user/documents"
const caminho3 = "/var/www/html"

console.log(separarData(caminho1,"/"));
console.log(separarData(caminho2,"/"));
console.log(separarData(caminho3,"/"));