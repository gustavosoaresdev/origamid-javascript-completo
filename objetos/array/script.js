// const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', { cor: 'Azul', preco: 2000 }],
function andar(nome) { console.log(nome) }];

/* Dificilmente vamos ver uma array assim, mas é só pra deixar claro
que pode fazer muitas coisas dentro de uma array. */

dados[2]('Ford');
dados[1][2].cor;

console.log(dados[1][2].preco);

const myArray = [{ nome: 'Gustavo', sobrenome: 'Soares Thomann', idade: 20 },
function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
},];

myArray[1](myArray[0].nome, myArray[0].sobrenome);

const upperNome = myArray[0].nome.toUpperCase(),
    upperSobrenome = myArray[0].sobrenome.toUpperCase();

myArray[1](upperNome, upperSobrenome);

const teste = [function nomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`);
}, { nome: 'Marcio', sobrenome: 'Soares Thomann', idade: 20 }];

teste[0](teste[1].nome, teste[1].sobrenome);

/* ================================================================================= */

// const carros = new Array('Ford', 'Fiat', 'Honda');
// carros[2] = 'Ferrari';
// carros[3] = 'Mustang';

/* Como não possui o quarto item, ele adiciona ao final da array... */

// console.log(carros); // ['Ford', 'Fiat', 'Ferrari', 'Mustang']

/* ================================================================================= */

const li = document.querySelectorAll('li');
const arrayLi = Array.from(li);

console.log(li); // NodeList
console.log(arrayLi); // Array

// Isto retorna uma array vazia:
// ====================================
const obj = {
    0: 'Gustavo',
    1: 'Soares Thomann',
    2: 20,
}

const arrayObj = Array.from(obj);
console.log(arrayObj);
// ====================================


// Isto retorna uma array com itens:
// ====================================
const obj2 = {
    0: 'Gustavo',
    1: 'Soares Thomann',
    2: 20,
    length: 3,
}

const arrayObj2 = Array.from(obj2);
console.log(arrayObj2);
// ====================================

/* Tem que ter o length para retornar os itens... */

/* ================================================================================= */

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas.length); // 3
console.log(frutas[frutas.length - 1].length); // 2

// OU
console.log(frutas[2].length); // 2

/* ================================================================================= */

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();

console.log(instrumentos); // ['Baixo', 'Guitarra', 'Violão']
console.log(idades); // [1, 12, 21, 32, 33, 43, 8]

/* sort() organiza a array por ordem alfabética,
porém não funciona muito bem com números. */

/* ================================================================================= */

const carros = ['Ford', 'Fiat', 'VW'];
carros.unshift('Kia', 'Ferrari');

const novaArray = carros.push('Parati', 'Gol');

console.log(novaArray); // Retorna o total de itens da array
console.log(carros); // ['Kia', 'Ferrari', 'Ford', 'Fiat', 'VW', 'Parati', 'Gol']

console.log(carros.pop()); // Gol
console.log(carros); // ['Kia', 'Ferrari', 'Ford', 'Fiat', 'VW', 'Parati']

/* Ele modifica a array original, como vocês podem ver, ele
removeu o 'Gol'... */

console.log(carros.shift()); // Kia
console.log(carros); // ['Ferrari', 'Ford', 'Fiat', 'VW', 'Parati']

/* Removeu o 'Kia'... */

/* ================================================================================= */