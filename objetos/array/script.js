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

console.log(carros.reverse()); // ['Parati', 'VW', 'Fiat', 'Ford', 'Ferrari']

/* O método reverse() também modifica a array original. */

// Demonstração:
console.log(carros); // ['Parati', 'VW', 'Fiat', 'Ford', 'Ferrari']

console.log(''); // Só uma quebra de linha no console para visualizar melhor

console.log(carros); // ['Parati', 'VW', 'Fiat', 'Ford', 'Ferrari']
console.log(carros.splice(2, 0, 'Fusca')); // []
console.log(carros); // ['Parati', 'VW', 'Fusca', 'Fiat', 'Ford', 'Ferrari']

/* ================================================================================= */

console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item5'].copyWithin(2, 0, 4));
// ['Item1', 'Item2', 'Item1', 'Item2', 'Item3']

console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0, 2));
// ['Banana', 'Banana', 'Item3', 'Item4']

/* ================================================================================= */

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];

/* Apartir de agora alguns testes de códigos serão testados no
console do navegador, portanto não tera muitos códigos aqui. */

/* ================================================================================= */

// const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

/* Se passar um valor que não existe na array com o método
indexOf() ele retorna -1 */

// Exemplo abaixo:
// linguagens.indexOf('ruby'); // -1

/* Outros testes foram testados no console do navegador... */

/* ================================================================================= */

// const linguagens = ['html', 'css', 'js', 'php', 'python'];
// console.log(linguagens.join(', ')); // html, css, js, php, python

let htmlString = '<h2>Título Principal</h2>';
htmlString = htmlString.split('h2');
htmlString = htmlString.join('h1');

/* ================================================================================= */

const linguagens = ['html', 'css', 'js', 'php', 'python'];
console.log(linguagens.slice(2, 3));

const cloneLinguagens = linguagens;

/* Desse modo acima eu não estou clonando a variável (linguagens),
na verdade, é uma referência a variável (linguagens). Portanto se
eu modificar a variável (cloneLinguagens) irá modificar a variável
(linguagens) também. */

// Por favor, não me julguem por dizer tanto a palavra (variável) kkkkkkkkkk

/* Se eu quiser clonar, basta usar o slice() mas é claro que
existe outros métodos para clonar, mas é só para demonstrar que
é muito comúm usar o slice para clonar... */