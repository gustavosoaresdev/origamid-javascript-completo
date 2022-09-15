# Eventos

## addEventListener

Adiciona uma função ao elemento, é chamada de **callback**, <br>
que será ativada assim que certo **evento** ocorrer neste elemento.

```js
    const img = document.querySelector('img');

    // elemento.addEventListener('event', callback, options)
    img.addEventListener('click', function() {
        console.log('Clicou');
    })
```

*O terceiro parâmetro é opcional.*