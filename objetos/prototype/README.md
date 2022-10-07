# Prototype

## Prototype

A propriedade prototype é um objeto adicionado a uma função <br>
quando a mesma é criada.

```js
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    const gustavo = new Pessoa('Gustavo', 20);
    console.log(Pessoa.prototype); // retorna o objeto
    console.log(gustavo.prototype); // undefined
```

## funcao.prototype

É possível adicionar novas propriedades e métodos ao objeto <br>
prototype.

```js
    Pessoa.prototype.andar = function() {
        return this.nome + ' andou';
    }
    Pessoa.prototype.nadar = function() {
        return this.nome + ' nadou';
    }

    console.log(Pessoa.prototype); // retorna o objeto
```

## Acesso ao Protótipo

O objeto criado utilizando o construtor, possui acesso aos métodos <br>
e propriedades do protótipo deste construtor. Lembrando, <br>
prototype é uma propriedade de funções apenas.

```js
    const gustavo = new Pessoa('Gustavo', 20);

    gustavo.nome;
    gustavo.idade;
    gustavo.andar();
    gustavo.nadar();
```

## proto

O novo objeto acessa os métodos e propriedades do protótipo <br>
através da propriedade **__proto__**. É papel da engine fazer essa <br>
busca, não devemos falar com **__proto__** diretamente.

```js
    // Acessam o mesmo método
    // mas __proto__ não terá
    // acesso ao this.nome
    gustavo.andar();
    gustavo.__proto__.andar();
```

*Nunca vamos acessar o* <br>
*protótipo assim*

## Herança de Protótipo

O objeto possui acesso aos métodos e propriedades do protótipo <br>
do construtor responsável por criar este objeto. O objeto abaixo <br>
possui acesso a métodos que nunca definimos, mas são herdados <br>
do protótipo de Object.

```js
    Object.prototype;
    gustavo.toString();
    gustavo.isPrototypeOf();
    gustavo.valueOf();
```

## Construtores Nativos

Objetos, Funções, Números, Strings e outros tipos de dados são <br>
criados utilizando construtores. Esses construtores possuem um <br>
protótipo com propriedades e métodos, que poderão ser <br>
acessadas pelo tipo de dado.

```js
    const pais = 'Brasil';
    const cidade = new String('RS');

    pais.charAt(0); // B
    cidade.charAt(0); // R

    String.prototype;
```