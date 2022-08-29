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