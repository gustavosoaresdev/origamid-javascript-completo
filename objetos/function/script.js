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