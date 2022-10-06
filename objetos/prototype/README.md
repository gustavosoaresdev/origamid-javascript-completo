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