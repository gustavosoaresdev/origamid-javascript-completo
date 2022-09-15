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

## this

A palavra chave **this** é uma palavra especial de JavaScript, que <br>
pode fazer referência a diferentes objetos dependendo do <br>
contexto. No caso de eventos, ela fará referência ao elemento em <br>
que addEventListener foi adicionado.

```js
    const img = document.querySelector('img');

    function callback(event) {
        console.log(this); // retorna a imagem
        console.log(this.getAttribute('src'));
    }

    img.addEventListener('click', callback);
```

*Geralmente igual ao* <br>
*event.currentTarget*

## Diferentes Eventos

Existem diversos eventos como **click**, **scroll**, **resize**, <br>
**keydown**, **keyup**, **mouseenter** e mais. Eventos podem ser <br>
adicionados a diferentes elementos, como o **window** e <br>
**document** também.

```js
    const h1 = document.querySelector('h1');

    function callback(event) {
        console.log(event.type, event);
    }

    h1.addEventListener('click', callback);
    h1.addEventListener('mouseenter', callback);
    window.addEventListener('scroll', callback);
    window.addEventListener('resize', callback);
    window.addEventListener('keydown', callback);
```

*https://developer.mozilla.org/en-US/docs/Web/Events*

## Keyboard

Você pode adicionar atalhos para facilitar a navegação no seu site, <br>
através de eventos do **keyboard**.

```js
    function handleKeyboard(event) {
        if(event.key === 'a')
            document.body.classList.toggle('azul'); 
        else if(event.key === 'v')
            document.body.classList.toggle('vermelho');
    }

    window.addEventListener('keydown', handleKeyboard);
```