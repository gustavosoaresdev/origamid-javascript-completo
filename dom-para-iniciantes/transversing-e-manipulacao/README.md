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

## Element vs Node

Element's represetam um elemento html, ou seja, uma tag. Node <br>
representa um nó, e pode ser um elemento (Element), texto, <br>
comentário, quebra de linha e mais.

```js
    const lista = document.querySelector('.animais-lista');

    lista.previousElementSibling; // elemento acima
    lista.previousSibling; // node acima

    lista.firstChild; // primeiro node child
    lista.childNodes; // todos os node child
```

*Geralmente estamos atrás de um* <br>
*elemento e não de qualquer node* <br>
*em si.*

## Manipulando Elementos

É possível mover elementos no dom com métodos de Node.

```js
    const lista = document.querySelector('.animais-lista');
    const contato = document.querySelector('.contato');
    const titulo = contato.querySelector('.titulo');

    contato.appendChild(lista); // move lista para o final de contato
    contato.insertBefore(lista, titulo); // insere a lista antes de titulo
    contato.removeChild(titulo); // remove titulo de contato
    contato.replaceChild(lista, titulo); // substitui titulo por lista
```