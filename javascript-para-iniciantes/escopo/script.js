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