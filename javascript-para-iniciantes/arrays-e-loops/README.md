# Arrays e Loops

## Array

É um grupo de valores geralmente relacionados. Servem para
guardarmos diferentes valores em uma única variável.

```js
    var videoGames = ['Switch', 'PS4', 'XBox'];

    videoGames[0]; // Switch
    videoGames[2]; // Xbox
```

*Acesse um elemento da array*
*utilizando [numero]*
*lembrando que a array é*
*base 0*

## Métodos e Propriedades de uma Array

```js
    var videoGames = ['Switch', 'PS4', 'XBox'];

    videoGames.pop(); // Remove o último item e retorna ele
    videoGames.push('3DS'); // Adiciona ao final da array
    videoGames.length; // 3
```

*Existem diversos outros métodos,*
*como map , reduce , forEach e*
*mais que veremos mais à frente*

## For Loop

Fazem algo repetidamente até que uma condição seja atingida.

```js
    for (var numero = 0; numero < 10; numero++) {
        console.log(numero);
    }

    // Retorna de 0 a 9 no console
```

*O for loop possui 3 partes,*
*início , condição e incremento*

## While Loop

```js
    var i = 0;
    while(1 < 10) {
        console.log(i);
        i++;
    }

    //  retorna de 0 a 9 no console
```

*o for loop é o mais comum*

## Arrays e Loops

```js
    var comidas = ['Arroz', 'Feijão', 'Carne', 'Salada'];

    for(var i = 0; i < comidas.length; i++) {
        console.log(comidas[i]);
    }
```