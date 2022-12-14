var nome = 'Gustavo';
var idade = 19;
var possuiFaculdade = false;

console.log(nome, idade, possuiFaculdade);  //  retorna: Gustavo 19 false

/* ================================================================================= */

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

console.log(precoTotal);    //  125

/* ================================================================================= */

var sobrenome = 'Soares',
    estado = 'Rio Grande do Sul';

console.log(sobrenome, estado);    //   Soares Rio Grande do Sul

/* ================================================================================= */

var semDefinir;
console.log(semDefinir);    //  undefined

/* ================================================================================= */

var $nome = 'Gustavo soares';
var _age = 19;
var comidaFavorita = 'Pizza';

/* ================================================================================= */

console.log(aindaNaoDefinido);  //  ReferenceError: aindaNaoDefinido is not defined

/* ================================================================================= */

console.log(comida);    //  undefined
var comida = 'Pizza';

//  mesma coisa se tivesse assim:
var comida;
console.log(comida);    //  undefined

//  pode ser assim:
var comida;
comida = 'Pizza';
console.log(comida);    //  Pizza

/* ================================================================================= */

var time = 'Internacional';
time = 'Grêmio';
console.log(time);    //    Grêmio

//  com **let** é a mesma coisa.

/* não importa quantas vezes eu mudo o valor, ele sempre retornara o
último valor reatribuído. */