'use strict';

var carro = 'Fusca';

function mostrarCarro() {
    console.log(carro);
}

mostrarCarro();
console.log(carro);

/* nunca crie uma variável sem antes declarar ela com var, let ou const. */

/* ================================================================================= */

//  com var:
if (true) {
    var mes = 'Dezembro';
    console.log(mes); // 'Dezembro'
}

console.log(mes); // 'Dezembro'

//  com let ou const:
if (true) {
    let mes2 = 'Dezembro';
    console.log(mes2); // 'Dezembro'
}

console.log(mes2); // retorna um erro

/* ================================================================================= */

{
    var carro2 = 'Fusca 2';
    const ano = 2018;
}

console.log(carro2);
console.log(ano);

/* ================================================================================= */

var i = 50;

for (var i = 0; i < 10; i++) {
    console.log(`Número ${i}`);
}

console.log(i * 10); //  100

/* ================================================================================= */

var i2 = 50;

for (let i2 = 0; i2 < 10; i2++) {
    console.log(`Número ${i2}`);
}

console.log(i2 * 10); //  500

/* ================================================================================= */