# Objetos

## Objetos

Conjunto de variáveis e funções, que são chamadas de
propriedades e métodos.

```js
    var pessoa = {
        nome: 'Gustavo',
        idade: 19,
        profissao: 'Designer',
        possuiFaculdade: false,
    }

    pessoa.nome; // 'Gustavo'
    pessoa.possuiFaculdade; //  false
```

*Propriedades e métodos consistem*
*em nome (chave) e valor*

## Métodos

É uma propriedade que possui uma função no local do seu valor.

```js
    var quadrado = {
        lados: 4,
        area: function(lado) {
            return lado * lado;
        },
        perimetro: function(lado) {
            return this.lados * lado;
        },
    }

    quadrado.lados; // 4
    quadrado.area(5); // 25
    quadrado.perimetro(5); // 20
```