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