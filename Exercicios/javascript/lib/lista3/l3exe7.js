// 7. Desafio Verifique se um ano é bissexto
import { verificarAnoBissexto } from "./bibliotecal3.js";

console.log(verificarAnoBissexto(2020));  // true
console.log(verificarAnoBissexto(2024));  // true
console.log(verificarAnoBissexto(1999));  // false
console.log(verificarAnoBissexto(2014));  // false
console.log(verificarAnoBissexto(2025));  // false
console.log(verificarAnoBissexto(1900));  // false
console.log(verificarAnoBissexto(2000));  // true
console.log(verificarAnoBissexto(2100));  // false
