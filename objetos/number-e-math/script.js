console.log(Number.isNaN('5')); // false
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false

/* Number.isInteger() verifica se o numero passado entre
os parênteses é inteiro ou não. */

/* ================================================================================= */

console.log(parseFloat('34234.4234'));

console.log(parseFloat('100.25 reais')); // 100.25
console.log(parseInt('100.25 reais')); // 100
console.log(parseInt(23.49)); // 23

/* parseInt() tem praticamente "a mesma função" do parseFloat(),
a única diferença é que o parseInt() retorna o número inteiro. */

/* ================================================================================= */

const preco = 10.3232;

console.log(preco.toFixed()); // '10'
console.log(+preco.toFixed()); // 10

console.log((20.25).toFixed()); // '20'
console.log(+(20.25).toFixed()); // 20

/* Caso você passe um número não estando em uma variável, conforme o
exemplo acima, você terá que passar entre (parênteses). */

// Mas, dificilmente vamos usar dessa forma...

/* ================================================================================= */

let valor = 59.49;
valor = valor.toLocaleString(
    'en-US', { style: 'currency', currency: 'USD' }
);

console.log(valor); // $59.49

/* ================================================================================= */

console.log(Math); // Diversas propriedades e métodos...

console.log(Math.PI); // Mesma coisa que isso:
const matematica = {
    PI: 3.14,
}

// E assim vai...

/* ================================================================================= */

const aleatorio = Math.floor(Math.random() * (40 - 20 + 1)) + 20;
console.log(aleatorio); // Número aleatório entre 20 e 40