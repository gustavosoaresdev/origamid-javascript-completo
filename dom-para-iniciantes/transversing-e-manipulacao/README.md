# Transversing e Manipulação

## outerHTML, innerHTML e innerText

Propriedades que retornam uma string contendo o html ou texto. É <br>
possível atribuir um novo valor para as mesmas <br>
**element.innerText = 'Novo Texto'**.

```js
    const menu = document.querySelector('.menu');

    menu.outerHTML; // todo o html do elemento
    menu.innerHTML; // html interno
    menu.innerText; // texto, sem tags

    menu.innerText = '<p>Texto</p>'; // a tag vai como texto
    menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada
```

## Transversing

Como navegar pelo DOM, utilizando suas propriedades e métodos.

```js
    const lista = document.querySelector('.animais-lista');

    lista.parentElement; // pai
    lista.parentElement.parentElement; // pai do pai
    lista.previousElementSibling; // elemento acima
    lista.nextElementSibling; // elemento abaixo

    lista.children; // HTMLCollection com os filhos
    lista.children[0]; // primeiro filho
    lista.children[--lista.children.length]; // último filho
    
    lista.querySelectorAll('li'); // todas as LI's
    lista.querySelector('li:last-child'); // último filho
```