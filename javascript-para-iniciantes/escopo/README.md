# Escopo

## Escopo de função

Variáveis declaradas dentro de funções não são acessadas fora
das mesmas.

```js
    function mostrarCarro() {
        var carro = 'Fusca';
        console.log(carro);
    }

    mostrarCarro(); // Fusca no console
    console.log(carro); // Erro, carro is not defined
```

*Escopo evita o conflito entre*
*nomes.*

## Variável Global (Erro)

Declarar variáveis sem a palavra chave **var** , **const** ou **let** , cria
uma variável que pode ser acessada em qualquer escopo (global).
Isso é um erro.

```js
    function mostrarCarro() {
        carro = 'Fusca';
        console.log(carro);
    }

    mostrarCarro(); // Fusca
    console.log(carro); // Fusca
```

*'use strict' impede isso.*