const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2022);

console.log(liquido.toUpperCase());
console.log(comida.length); // 5

/* OBS: espaços também conta! */

// const frase = 'A melhor comida';

// console.log(frase.length); // 15
// console.log(frase[frase.length - 1]); // a
// console.log(frase.charAt(frase.length - 1)); // a

/* ================================================================================= */

const frase = 'A melhor linguagem é ';
const linguagem = 'JavaScript';

const fraseFinal = frase + linguagem;
// OU
const fraseFinal2 = frase.concat(linguagem, '!! ', 'Pode concatenar quantas quiser...');
console.log(fraseFinal2);

/* ================================================================================= */

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(fruta.includes(listaFrutas)); // false
console.log(listaFrutas.includes(fruta)); // true
console.log(fruta.startsWith('Ba')); // true
console.log(fruta.startsWith('ba')); // false
console.log(fruta.endsWith('nas')); // false
console.log(fruta.endsWith('na')); // true

/* Lembrando que é (case sensitive). */

/* ================================================================================= */