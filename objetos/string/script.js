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

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); // Dep

/* Se passar apenas um valor inteiro, ele corta a quantidade de
caracteres que você passou. */

// Ex:
console.log(transacao1.slice(10)); // e cliente

/* Se passar (-) e tal valor, ele corta apartir do final. */

// Ex:
console.log(transacao3.slice(0, -2)); // Taxa de camis

/* Agora, se você passar apenas um valor inteiro, por exemplo (-5),
ele retorna os últimos 5 caracteres. */

// Ex:
console.log(transacao3.slice(-5)); // misas

/* ================================================================================= */

console.log(fruta.indexOf('n')); // 2
console.log(fruta.lastIndexOf('n')); // 4

/* ================================================================================= */

const preco = 'R$ 99,00';
console.log(preco.padStart(20, '-')); // ------------R$ 99,00

/* O exemplo acima não vai ser "20 traços", ele vai preencher
até chegar em 20 caracteres, quer dizer que o valor (R$ 99,00)
vai contar caracter também! */

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
listaPrecos.forEach((preco) => {
    console.log(preco.padStart(10, '-'));
})

/* ================================================================================= */

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
listaItens = listaItens.replace('Bonés', 'Chapéus');

console.log(listaItens); // Camisas, Chapéus, Calças, Bermudas, Vestidos, Saias

/* ================================================================================= */

const arrayLista = listaItens.split(', ');
console.log(arrayLista);
// ['Camisas', 'Chapéus', 'Calças', 'Bermudas', 'Vestidos', 'Saias']

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const novoHtml = htmlArray.join('section');

console.log(htmlText);
// <div>O melhor item</div><div>A melhor lista</div>

console.log(htmlArray);
// ['<', '>O melhor item</', '><', '>A melhor lista</', '>']

console.log(novoHtml);
// <section>O melhor item</section><section>A melhor lista</section>

const frutasArray = ['Banana', 'Melancia', 'Laranja'];
console.log(frutasArray.join(', ')); // Banana, Melancia, Laranja

/* ================================================================================= */

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toLowerCase() === 'feminino');
console.log(sexo1.toUpperCase() === 'FEMININO');

/* ================================================================================= */

const inputNome = ' Gustavo    ';
console.log(inputNome.trim()); // 'Gustavo'
console.log(inputNome.trimStart()); // 'Gustavo    '
console.log(inputNome.trimEnd()); // ' Gustavo'