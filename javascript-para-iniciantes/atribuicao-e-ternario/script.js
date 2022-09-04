var numero = 20;
var numero2 = 10;

numero += 10;   //  numero = numero + 10;
numero %= numero2;  //  numero = numero % numero2;
console.log(numero);

/* ================================================================================= */

var idade = 19;
var possuiDiabetes = false;
var podeBeber = (idade >= 18 && possuiDiabetes === false)
    ? 'Pode beber'
    : 'Não pode beber';

console.log(podeBeber); //  'Pode beber'

/* lembrando que não vai fazer sentido você retornar true ou false,
porque por padrão a condição ela já te retorna um valor booleano... */

//  não faça isso:
var idade2 = 19;
var possuiDiabetes2 = false;
var podeBeber2 = (idade2 >= 18 && possuiDiabetes2 === false)
    ? true : false;

console.log(podeBeber2);

//  faça isso:
var idade3 = 19;
var possuiDiabetes3 = false;
var podeBeber3 = (idade3 >= 18 && possuiDiabetes3 === false);

console.log(podeBeber3);

//  o código acima por padrão já retorna um valor booleano.

/* ================================================================================= */

var possuiFaculdade = false;

//  não precisa fazer isso caso for apenas uma linha de código
if (possuiFaculdade) {
    console.log('Possui faculdade');
}
else {
    console.log('Não possui faculdade');
}

//  se for apenas uma linha de código pode fazer assim:
if (possuiFaculdade)
    console.log('Possui faculdade');
else
    console.log('Não possui faculdade');