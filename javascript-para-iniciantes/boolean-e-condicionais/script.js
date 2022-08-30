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

var minhaIdade = 19,
    idadeDoMeuIrmao = 30;

console.log(minhaIdade > idadeDoMeuIrmao);  //  false

if (minhaIdade > idadeDoMeuIrmao) {
    console.log('Gustavo é mais velho');
}
else {
    console.log('Marcio é mais velho');
}

//  o retorno dessa condição será: Marcio é mais velho

var cond = 10 <= 5;
console.log(!cond); //  true
console.log(cond);  //  false

/* ================================================================================= */

var x = 10;
console.log(x === 10);  //  true

//  não confundam, (=) é atribuição, (==) e (===) é comparação.

/*  (===) não verifica apenas o valor, ele verifica o tipo de dado também,
diferente do (==) que só verifica o valor. */

//  quer dizer que isso:
console.log('10' === 10);  //  é false

var n = 'Gustavo';
console.log(n === 'Gustavo');   //  true

//  é recomendável usar o (===)

/* ================================================================================= */

if ((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro');
}
else {
    console.log('Falso');
}

//  nesse caso retornara: Falso
/* porque (5 - 5) da 0, e 0 é um valor false.
isso quer dizer que se deu false já de começo, ele não irá continuar
a verificar os próximos valores. */

if ((5 - 10) && (5 + 5)) {
    console.log('Verdadeiro');
}
else {
    console.log('Falso');
}

//  nesse caso retornara: Verdadeiro
/* é meio confuso kkkk eu sei, mas (5 - 10) retornara: -5
e -5 é true, porque não é 0, ou seja, qualquer número negativo
que não for 0 ou -0, será true. */

/* ================================================================================= */

var cond2 = (5 - 5) || (5 + 5) || (10 - 2);
console.log(cond2);

//  nesse caso retornara: 10
/* vem comigo; (5 - 5) é igual a 0, (5 + 5): é igual a 10.
quando ele encontrar o primeiro valor true, ele para!
não importa se os próximos serão true, se ele encontrar
o primeiro true, ele para, e não continuará lendo os próximos valores. */

/* ================================================================================= */

var corFavorita = 'Azul';

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu');
        break;
    case 'Amarelo':
        console.log('Olhe para o sol');
        break;
    case 'Verde':
        console.log('Olhe para a floresta');
        break;
    default:
        console.log('Error');
}

/* caso nenhum desses case for verdadeiro, o default
será ativado, e retornara: Error. */