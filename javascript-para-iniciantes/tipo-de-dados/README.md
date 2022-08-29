# Tipos de Dados

## 7 Tipos de Dados

Todos são primitivos exceto os objetos.

```js
    var nome = 'Gustavo';    //  String
    var idade = 19;    //  Number
    var possuiFaculdade = false;    //  Boolean
    var time;    //  Undefined
    var comida = null;    //  Null
    var simbolo = Symbol();    //  Symbol
    var novoObjeto = {};    //  Object
```

*Primitivos são dados imutáveis.*

## Verificar tipo de dado

```js
    var nome = 'Gustavo';
    console.log(typeof nome);
    //  retorna string
```

*typeof null retorna object*

## String

Você pode somar uma string e assim concatenar as palavras.

```js
    var nome = 'Gustavo';
    var sobrenome = 'Soares Thomann';
    var nomeCompleto = nome + ' ' + sobrenome;
```

Você pode somar números com strings, o resultado final sempre será
uma string.

```js
    var gols = 1000;
    var frase = 'Romário fez ' + gols + ' gols';
```