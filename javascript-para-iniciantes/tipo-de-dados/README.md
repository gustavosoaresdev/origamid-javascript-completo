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

## Aspas duplas, Simples e Template String

```js
    'JavaScript é "super" fácil';
    "JavaScript é 'super' fácil";
    "JavaScript é \"super\" fácil";
    `JavaScript é "super" fácil`;
    "JavaScript é "super" fácil";   //  Inválido
```

*Não necessariamente precisamos*
*atribuir valores a uma variável*

## Template String

```js
    var gols = 1000;
    var frase1 = 'Romário fez ' + gols + ' gols';
    var frase2 = `Romário fez ${gols} gols`;    //  utilizando template string
```

*Você deve passar expressões /*
*variáveis dentro de ${}*

## Exercício

```js
    //  Declare uma variável contendo uma string

    //  Declare uma variável contendo um número dentro de uma string

    //  Declare uma variável com a sua idade

    //  Declare duas variáveis, uma com o seu nome
    //  e outra com seu sobrenome e some as mesmas

    //  Coloque a seguinte frase em uma variável: It's time

    //  Verifique o tipo da variável que contém o seu nome
```