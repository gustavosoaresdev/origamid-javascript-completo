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