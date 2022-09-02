var nome = 'Gustavo';

var nomeMinusculo = nome.toLowerCase(); //  gustavo
var nomeMaiusculo = nome.toUpperCase(); //  GUSTAVO

/* ================================================================================= */

function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado.length;    //  1

/* length em uma função retorna o total de argumentos passado nela */

/* ================================================================================= */

var btn = document.querySelector('.btn');

btn.classList.add('ativo');
btn.innerText;  //  'Clique'
btn.addEventListener('click', function () {
    console.log('Hello World!');
});

/* o objetivo não é decorar códigos,
e sim entender o que cada um deles fazem. */