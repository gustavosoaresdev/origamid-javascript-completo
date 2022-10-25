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