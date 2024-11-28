function obtermenor(a, b, c) {
    let menor = a;
 if(a < b) menor = a;
 else      menor = b;

    if(menor > b) menor = b;
    if(menor > c) menor = c;

    return menor;
}

console.log(obterMenor(3,7,5));
console.log(obterMenor(-1,-5,-3));
console.log(obterMenor(8,2,10));
console.log(obterMenor(8,10,2));
