var total = 10 + 5 + 10;
var divisao = 200 / 5;
var modulo = 3872983892 % 3;

console.log(modulo);

/* ================================================================================= */

var testeNaN = 'Isso é 100' / 2;
console.log(isNaN(testeNaN));  //  true

//  diferente de:

var testeNaN2 = '100' / 2;
console.log(isNaN(testeNaN2));  //  false

/* ================================================================================= */

var soma1 = 10 + 10 + 20 + 30 * 4 / 2 + 10;
console.log(soma1); //  110

/* ================================================================================= */

var x = 5;
console.log(x++);   //  5
console.log(x); //  6

var x2 = 10;
console.log(++x2);  //  11

/* com o ++ antes da variável, ela incrementa na hora,
já com o ++ depois da variável ela só incrementa no próximo console. */

var x3 = 5;
console.log(++x3);  //  isso é igual a isso:
x3 = x3 + 1;

var x4 = 7;
console.log(--x4);  //  6

/* ================================================================================= */

var idade = '19';
var somaIdade = 5;
console.log(idade + somaIdade); //  195
console.log(+idade + somaIdade);    //  24