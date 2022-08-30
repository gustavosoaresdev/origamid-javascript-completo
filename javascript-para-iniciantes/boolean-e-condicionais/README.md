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