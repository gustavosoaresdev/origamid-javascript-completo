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

## Callback

É boa prática separar a função de callback do addEventListener, ou <br>
seja, declarar uma função ao invés de passar diretamente uma <br>
função anônima

```js
    const img = document.querySelector('img');
    function callback() {
        console.log('Clicou');
    }

    img.addEventListener('click', callback); // 🚀
    img.addEventListener('click', callback()); // undefined
    img.addEventListener('click', function() {
        console.log('Clicou');
    })

    img.addEventListener('click', () => {
        console.log('Clicou');
    })
```

## Event

O primeiro parâmetro do callback é referente ao evento que <br>
ocorreu.

```js
    const img = document.querySelector('img');

    function callback(event) {
        console.log(event);
    }

    img.addEventListener('click', callback);
```

*Geralmente utilizam **e** de **event*** <br>
*como nome do parâmetro*

## Propriedades do Event

```js
    const animaisLista = document.querySelector('.animais-lista');

    function executarCallback(event) {
        const currentTarget = event.currentTarget; // this
        const target = event.target; // onde o clique ocorreu
        const type = event.type; // tipo de evento
        const path = event.path;

        console.log(currentTarget, target, type, path);
    }

    animaisLista.addEventListener('click', executarCallback);
```

## event.preventDefault()

Previne o comportamento padrão do evento no browser. No caso <br>
de um link externo, por exemplo, irá previnir que o link seja ativado.

```js
    const linkExterno = document.querySelector('a[href^="http"]');

    function clickNoLink(event) {
        event.preventDefault();
        console.log(event.currentTarget.href);
    }

    linkExterno.addEventListener('click', clickNoLink);
```