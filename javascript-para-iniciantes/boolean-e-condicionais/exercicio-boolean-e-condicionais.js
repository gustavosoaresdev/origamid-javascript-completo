//  Verifique se a sua idade é maior do que a de algum parente
//  Dependendo do resultado coloque no console:
//  'É maior', 'É igual' ou 'É menor'
var minhaIdade = 19,
    idadeDoMeuIrmao = 30;

if (minhaIdade > idadeDoMeuIrmao) {
    console.log('É maior');
}
else if (minhaIdade === idadeDoMeuIrmao) {
    console.log('É igual');
}
else {
    console.log('É menor'); //  active
}

//  Qual valor é retornado na seguinte expressão?
var expressão = (5 - 2) && (5 - ' ') && (5 - 2);
//  o valor retornado é: 3

//  Verifique se as seguintes variáveis são truthy ou falsy
var nome = 'Gustavo';
var idade = 19;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(
    'nome:', !!nome,
    'idade:', !!idade,
    'possui doutorado:', !!possuiDoutorado,
    'emprego futuro:', !!empregoFuturo,
    'dinheiro na conta:', !!dinheiroNaConta
);

//  Compare o total de habitantes do brasil com a china (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil tem mais habitantes');
}
else {
    console.log('China tem mais habitantes');
}

//  O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
}
else {
    console.log('Falso');
}

//  o retorno da condição acima será: Falso

//  O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
}
else {
    console.log('Falso');
}

//  o retorno da condição acima será: Cão