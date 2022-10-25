const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
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

const carros = new Array('Ford', 'Fiat', 'Honda');
carros[2] = 'Ferrari';
carros[3] = 'Mustang';
/* Como não possui o quarto item, ele adiciona ao final da array... */

console.log(carros); // ['Ford', 'Fiat', 'Ferrari', 'Mustang']

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