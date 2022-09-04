// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;

console.log(scroll);    //  1500

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa);
console.log(darCredito);    //  true

//  agora, se você quiser retornar uma string, ai sim você usa o ternário

darCredito = (possuiCarro && possuiCasa)
    ? 'Dar crédito ao cliente'
    : 'Negar crédito';

console.log(darCredito);    //  'Dar crédito ao cliente'