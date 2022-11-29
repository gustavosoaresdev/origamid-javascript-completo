// Crie uma função que verifique
// corretamente o tipo de dado
function checkDataType(data) {
  return Object.prototype.toString.call(data);
}

console.log(checkDataType({})); // [object Object]

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const square = {}
Object.defineProperties(square, {
  sides: {
    value: 4,
    enumerable: true,
  }
})

square.sides = 2;
console.log(square); // {sides: 4}

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: '#333'
}

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array
console.log(Object.getOwnPropertyNames(String.prototype));
console.log(Object.getOwnPropertyNames(Array.prototype));