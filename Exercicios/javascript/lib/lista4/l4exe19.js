// 19. Desafio Verifique se uma string é um anagrama de outra.
function anagrama(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
  }
  console.log(anagrama("listen", "silent"));