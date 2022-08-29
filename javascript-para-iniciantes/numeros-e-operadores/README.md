# Números e operadores

## Números

```js
    var idade = 19;
    var gols = 1000;
    var pi = 3.14;  //  ponto para decimal
    var exp = 2e10; //  20000000000
```

*Precisão para até 15 digitos*

## Operadores Aritméticos

```js
    var soma = 100 + 50;    //  150
    var subtracao = 100 - 50;   //  50
    var multiplicacao = 100 * 2;    //  200
    var divisao = 100 / 2;  //  50
    var expoente = 2 ** 4;  //  16
    var modulo = 14 % 5;    //  4
```

*Lembrado que soma + em Strings*
*serve para concatenar*

## Operadores Aritméticos (Strings)

```js
    var soma = '100' + 50;  //  10050
    var subtracao = '100' - 50; //  50
    var multiplicacao = '100' * 2;  //  200
    var divisao = 'Comprei 10' / 2; //  NaN (Not a Number)
```

*É possivel verificar se uma variável é NaN*
*ou não com a função isNaN()*

## NaN (Not a Number)

```js
    var numero = 80;
    var unidade = 'kg';
    var peso = numero + unidade;    //  '80kg'
    var pesoPorDois = peso / 2; //  NaN (Not a Number)
```

## A ordem importa

Começa por multiplicação e divisão, depois por soma e subtração.

```js
    var total1 = 20 + 5 * 2;    //  30 
    var total2 = (20 + 5) * 2;  //  50
    var total3 = 20 / 2 * 5;    //  50
    var total4 = 10 + 10 * 2 + 20 / 2;  //  40
```

*Parênteses para priorizar uma expressão*

## Operadores Aritméticos Unários

```js
    var incremento = 5;
    console.log(incremento++);  //  5
    console.log(incremento);    //  6

    var incremento2 = 5;
    console.log(++incremento2); //  6
    console.log(incremento2);   //  6
```

*Mesma coisa para o decremento --x*

## Operadores Aritméticos Unários 2

O **+** e **-** tenta transformar o valor seguinte em número

```js
    var frase = 'Isso é um teste';
    +frase; //  NaN
    -frase; //  NaN

    var idade = '19';
    +idade; //  19 (número)
    -idade; //  -19 (número)
    console.log(+idade + 5);    //  24

    var possuiFaculdade = false;
    console.log(+possuiFaculdade); //  0
```

*O - antes de um número torna ele negativo*

#### Guia Completo de Operadores

[MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Exercício

```js
    //  Qual o resultado da seguinte expressão?
    var total = 10 + 5 * 2 / 2 + 20;

    //  Crie duas expressões que retornem NaN

    //  Somar a string '200' com o número 50 e retornar 250

    //  Incremente o número 5 e retorne o seu valor incrementado

    //  Como dividir o peso por 2?
    var numero = '80';
    var unidade = 'kg';
    var peso = numero + unidade;    //  '80kg'
    var pesoPorDois = peso / 2; //  NaN (Not a Number)
```