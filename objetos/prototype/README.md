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

## É possível acessar a função do protótipo

É comum, principalmente em códigos mais antigos, o uso direto de <br>
funções do protótipo do construtor Array.

```js
    const lista = document.querySelectorAll('li');

    // Transforma em uma array
    const listaArray = Array.prototype.slice.call(lista);
```

*Existe o método Array.from()*

## Método direto do Objeto vs Método do Protótipo

Nos objetos nativos existem métodos linkados diretamente ao <br>
Objeto e outros linkados ao protótipo.

```js
    Array.prototype.slice.call(lista);
    Array.from(lista);

    // Retorna uma lista com os métodos / propriedades
    Object.getOwnPropertyNames(Array);
    Object.getOwnPropertyNames(Array.prototype);
```

*__dado.constructor.name__, retorna* <br>
*o nome do construtor;*

## Apenas os Métodos do Protótipo são Herdados

```js
    [1,2,3].slice(); // existe
    [1,2,3].from(); // não existe
```

## Entenda o Que está Sendo Retornado

Os métodos e propriedades acessado com o **.** são referentes ao <br>
tipo de dados que é retornado antes desse **.**

```js
    const Carro = {
        marca: 'Ford',
        preco: 2000,
        acelerar() {
            return true;
        }
    }

    Carro // Object
    Carro.marca // String
    Carro.preco // Number
    Carro.acelerar // Function
    Carro.acelerar() // Boolean
    Carro.marca.charAt // Function
    Carro.marca.charAt(0) // String
```

*Verifique o nome do construtor*