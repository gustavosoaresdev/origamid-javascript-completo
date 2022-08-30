# Boolean e Condicionais

## Boolean

Existem dois valores booleanos, **false** ou **true**.

```js
    var possuiGraduacao = true;
    var possuiDoutorado = false;
```

## Condicionais if e else

Verificar se uma expressão é verdadeira com **if**, caso contrário o
**else** será ativado.

```js
    var possuiGraduacao = true;

    if(possuiGraduacao) {
        console.log('Possui graduação');
    }
    else {
        console.log('Não possui graduação');
    }

    //  retorna Possui graduação e não executa o else
```

*O valor dentro dos parênteses*
*sempre será avaliado em*
*false ou true.*

## Condicionais else if

Se o **if** não for verdadeiro, ele testa o **else if**

```js
    var possuiGraduacao = true;
    var possuiDoutorado = false;

    if(possuiDoutorado) {
        console.log('Possui graduação e doutorado');
    }
    else if(possuiGraduacao) {
        console.log('Possui graduação, mas não possui doutorado');
    }
    else {
        console.log('Não possui graduação');
    }

    //  retorna Possui graduação, mas não possui doutorado
```

## Truthy e Falsy

Existem valores que retornam **true** e outros que retornam
**false** quando verificados em uma expressão booleana.

```js
    //  Falsy
    if(false)
    if(0)   //  ou -0
    if(NaN)
    if(null)
    if(undefined)
    if('')  //  ou "" ou ``
```

*Todo resto é truthy*

## Truthy

```js
    //  Truthy
    if(true)
    if(1)
    if(' ')    //   é truthy porque tem espaço, e conta como um caracter.
    if('Gustavo')
    if(-5)
    if({})
```

## Operador Lógico de Negação (!)

O operador **!**, nega uma operação booleana. Ou seja,
**!true** é igual a **false** e **!false** é igual a **true**.

```js
    //  Truthy
    if(!true)   //  false
    if(!1)  //  false
    if(!'') //  true
    if(!undefined)  //  true
    if(!!' ')   //  true
    if(!!'')    //  false
```

*Dica, você pode utilizar o (!!)*
*para verificar se uma expressão é*
*Truthy ou Falsy*

## Operadores de comparação 1

Vão sempre retornar um valor booleano

```js
    10 > 5; //  true
    5 > 10; //  false
    20 < 10;    //  false
    10 <= 10;   //  true
    10 >= 11    //  false
```

## Operadores de comparação 2

O **==** faz uma comparação não tão estrita e o **===** faz uma
comparação estrita, ou seja, o tipo de dado deve ser o mesmo
quando usamos **===**

```js
    10 == '10'; //  true
    10 == 10;   //  true
    10 === '10';    //  false
    10 === 10;  //  true
    10 != 15;   //  true
    10 != '10'; //  false
    10 !== '10';    //  true
```