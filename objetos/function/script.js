function areaQuadrado(lado) {
    return lado * lado;
}

const perimetro = new Function('lado', 'return lado * 4');

/* Dessa forma acima provavelmente nós nunca iremos usar!
Mas é só pra deixar claro que é a mesma coisa que a função
lá de cima (areaQuadrado). */

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

function somar(n1, n2) {
    return n1 + n2;
}

console.log(somar(3, 3));

/* Lembrando, se eu estou executando a função, o que ela me retorna
é um número, então nesse caso eu vou ter métodos e propriedades de (Number). */

// Diferente disso:
console.log(somar.length); // 2

// Porque agora, eu estou falando diretamente com a função mesmo...

console.log(somar.name.toUpperCase()); // 'SOMAR'

/* somar.name, me retorna uma string, portanto eu terei acesso aos
métodos e propriedades de uma (String). */



// Lembrando mais uma vez, o que importa, é sempre o que retorna!!!

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

function darOi(nome, idade) {
    console.log('Oi para você', nome, idade);
}

darOi.call(null, 'Gustavo', 20); // Oi para você Gustavo 20

function descricaoCarro() {
    console.log(this); // O this nesse caso, é o objeto Window
    console.log(this.marca + ' ' + this.ano);
}

descricaoCarro(); // undefined undefined

// É errado fazer isso, mas é só um teste;
window.marca = 'Ford';
window.ano = 2022;

function descricaoCarro2(kmh) {
    console.log(`${this.marca} de ano ${this.ano} percorreu ${kmh}km/h`);
}

descricaoCarro2(100);
// Ford de ano 2022 percorreu 100km/h

descricaoCarro2.call({ marca: 'Fiat', ano: 1234 }, 120);
// Fiat de ano 1234 percorreu 120km/h

// Geramente vamos usar o call assim;
const objetoQualquer = {
    marca: 'Ferrari',
    ano: 2018
}

descricaoCarro2.call(objetoQualquer, 300); // Ferrari de ano 2018 percorreu 300km/h

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const carros = ['Ford', 'Fiat', 'VW'];
const frutas = ['Banana', 'Uva', 'Pêra'];

frutas.forEach.call(carros, (item) => {
    console.log(item);
})

/* Não importa o que vem antes do forEach() ou de qualquer outro método
que você use, o que importa é o this que você passa dentro do call.
Que nesse caso é o (carros). É apartir do this que vai contar! */

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

function Dom(seletor) {
    this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
    console.log(this); // {element: li}
    this.element.classList.add(classe);
}

/* Lembrando aqui, que quando quisermos passar uma classe ao elemento, não
vamos fazer da maneira anterior, aquilo foi só uma demonstração de como que
funciona. */

// Podemos fazer assim para adicionar uma classe;
const li = {
    element: document.querySelector('li')
}

// Dom.prototype.ativo.call(li, 'AtivoLi');

// É bem comúm esse tipo de código!



// const ul = new Dom('ul');
// ul.ativo.call(li, 'ativo');

// console.log(ul); // Add a classe (ativo) ao primeiro li da página

/* Quando substituirmos algum objeto com o call, o objeto que vai substituir
tem que ser parecido com o objeto original, conforme o exemplo acima. Isso
é essencial. */

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const frutas2 = ['Uva', 'Maçã', 'Banana'];

// Isso aqui
Array.prototype.pop.call(frutas2);

// É a mesma coisa que isso aqui;
frutas2.pop();

Array.prototype.mostrarThis = function () {
    console.log(this);
}

/* OBS: Não é uma boa prática usarmos o Construtor Nativo para criar
métodos, isso é apenas uma demonstração. */

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const arrayLike = {
    0: 'Item 1',
    1: 'Item 2',
    2: 'Item 3',
    length: 3
}

const li2 = document.querySelectorAll('li');

const filtro = Array.prototype.filter.call(li2, (item) => {
    return item.classList.contains('ativo');
})

console.log(filtro); // [li.ativo, li.ativo]

/* Usamos dessa forma acima quando não é uma Array de verdade. Mas podemos
fazer dessa forma abaixo que também da certo; */

const arrayLi = Array.from(li2);

const filtro2 = arrayLi.filter((item) => {
    return item.classList.contains('ativo');
})

console.log(filtro2); // [li.ativo, li.ativo]

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const numeros = [2, 24, 54, 232, 542, 242];

const numeroMaximoSemApply = Math.max(numeros);
const numeroMaximoComApply = Math.max.apply(null, numeros);

console.log(numeroMaximoSemApply); // NaN
console.log(numeroMaximoComApply); // 542

/* Math.max() não aceita uma array de números, mas se usarmos o apply()
conforme o exemplo acima, ele vai funcionar. */