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