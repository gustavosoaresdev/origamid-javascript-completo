# Tudo é objeto

## Tudo é objeto

Strings, Números, Boolean, Objetos e mais, possuem propriedades
e métodos. Por isso são objetos.

```js
    var nome = 'André';
    nome.length; // 5
    nome.charAt(1); // 'n'
    nome.replace('ré', 'rei'); // 'Andrei'
    nome; // 'André'
```

*Uma string herda propriedades e*
*métodos do construtor String()*

## Números

```js
    var altura = 1.8;

    altura.toString();  //  '1.8'
    altura.toFixed();   //  '2'
```

*Por um breve momento o número é*
*envolvido em um Objeto*
*(coerção), tendo acesso assim as*
*suas propriedades e métodos*

## Funções

```js
    function areaQuadrado(lado) {
        return lado * lado;
    }

    areaQuadrado.toString();
    //"function areaQuadrado(lado) {
    //  return lado * lado;
    //}"

    areaQuadrado.length; // 1
```