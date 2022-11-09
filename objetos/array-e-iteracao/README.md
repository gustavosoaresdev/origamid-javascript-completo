# Aula de hoje - Array e Iteração

## [].forEach()

**[].forEach(callback(itemAtual, index, array))** a função de <br>
callback é executada para cada item da array. Ela possui <br>
três argumentos, (itemAtual, valorDoIndex, arrayOriginal).

```js
    const carros = ['Ford', 'Fiat', 'Honda'];

    // com função tradicional
    carros.forEach(function(item, index, array) {
        console.log(item.toUpperCase());
    });

    // com Arrow Function
    carros.forEach((item, index, array) => {
        console.log(item.toUpperCase());
    });
```

*O método sempre retorna* <br>
*undefined*