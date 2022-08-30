var possuiGraduacao = false;
var possuiDoutorado = true;

console.log(possuiGraduacao, possuiDoutorado);  //  false true

/* ================================================================================= */

if (possuiGraduacao) {
    console.log('É verdadeiro');    //  false
}
else if (possuiDoutorado) {
    console.log('Possui doutorado');    //  true
}
else {
    console.log('Não possui nada');
}

/* ================================================================================= */

var possuiGraduacao2 = true;
var possuiDoutorado2 = false;

if (possuiDoutorado2) {
    console.log('Possui graduação e doutorado');
}
else if (possuiGraduacao2) {
    console.log('Possui graduação, mas não possui doutorado');
}
else {
    console.log('Não possui graduação');
}

//  retorna Possui graduação, mas não possui doutorado

/* ================================================================================= */

var nome = ' ';

if (nome) {
    console.log(nome);
}
else {
    console.log('Nome não identificado.');
}

var numero = 0;

if (numero) {
    console.log('Truthy');
}
else {
    console.log('Falsy');
}

/* ================================================================================= */

if (!possuiGraduacao) {
    console.log('Não possui graduação');
}

/* a condição de cima é true, porque a variável possuiGraduacao
é false, e na condição antes da variável tem o operador de negação (!)
que faz com que a variável seja true. */

//  o operador de negação (!) sempre inverte a condição.

var char = '';
console.log(!!char);    //  false
console.log(!!true);    //  true

/* ================================================================================= */