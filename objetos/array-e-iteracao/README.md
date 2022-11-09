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

## Arrow Function

```js
    const li = document.querySelectorAll('li');

    li.forEach(i => i.classList.add('ativo'));

    // o código acima, é a mesma coisa que isso:
    li.forEach(function(item) {
        item.classList.add('ativo');
    });
```

## Modificar a Array Original

O terceiro argumento do callback (array) é uma referência <br>
direta e se modificado irá também modificar a array original.

```js
    const carros = ['Ford', 'Fiat', 'Honda'];
    carros.forEach((item, index, array) => {
        array[index] = 'Carro ' + item;
    });

    carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']
```

*É melhor utilizarmos o map para* <br>
*isso*