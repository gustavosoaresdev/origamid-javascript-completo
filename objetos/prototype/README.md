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