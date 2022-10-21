# Aula de hoje - Number e Math

## Number

É a construtora de números, todo número possui as propriedades e <br>
métodos do prototype de Number. Number também possui alguns <br>
métodos.

```js
    const ano = 2022;
    const preco = new Number(99);
```

## Number.isNaN() e Number.isInteger();

isNaN() é um método de Number, ou seja, não faz parte do <br>
protótipo. isInteger() verifica se é uma integral.

```js
    Number.isNaN(NaN); // true
    Number.isNaN(4 + 5); // false

    Number.isInteger(20); // true
    Number.isInteger(23.6); // false
```

## Number.parseFloat() e Number.parseInt()

parseFloat() serve para retornarmos um número a partir de uma <br>
string. A String deve começar com um número. parseInt recebe <br>
também um segundo parâmetro que é o Radix, 10 é para decimal.

```js
    parseFloat('99.50'); // Mesma função sem o Number
    Number.parseFloat('99.50'); // 99.5
    Number.parseFloat('100 Reais'); // 100
    Number.parseFloat('R$ 100'); // NaN

    parseInt('99.50', 10); // 99
    parseInt(5.43434355555, 10); // 5
    Number.parseInt('100 Reais', 10); // 100
```

*Float possui decimal, Integer* <br>
*não.*

## n.toFixed(decimais)

Arredonda o número com base no total de casas decimais do <br>
argumento.

```js
    const preco = 2.99;
    preco.toFixed(); // 3

    const carro = 1000.455;
    carro.toFixed(2) // 1000.46

    const preco2 = 1499.49;
    preco2.toFixed() // 1499
```

## n.toString(radix)

Transforma o número em uma string com base no Radix. Use o 10 <br>
para o sistema decimal.

```js
    const preco = 2.99;
    preco.toString(10); // '2.99'
```

## n.toLocaleString(lang, options);

Formata o número de acordo com a língua e opções passadas.

```js
    const preco = 59.49;
    preco.toLocaleString(
        'en-US', {style: 'currency', currency: 'USD'}
    ); // $59.49
    preco.toLocaleString(
        'pt-BR', {style: 'currency', currency: 'BRL'}
    ); // R$ 59,49
```

## Math

É um Objeto nativo que possui propriedades e métodos de <br>
expressões matemáticas comuns.

```js
    Math.PI // 3.14159
    Math.E // 2.718
    Math.LN10 // 2.303
```

*https://developer.mozilla.org/en-US* <br>
*/docs/Web/JavaScript/Reference/Global_Objects/Math*