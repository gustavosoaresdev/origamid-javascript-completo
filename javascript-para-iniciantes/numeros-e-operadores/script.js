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