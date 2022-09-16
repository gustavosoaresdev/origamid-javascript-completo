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

## Novos Elementos

Podemos criar novos elementos com o método <br>
**createElement()**

```js
    const animais = document.querySelector('.animais');

    const novoH1 = document.createElement('h1');
    novoH1.innerText = 'Novo Título';
    novoH1.classList.add('titulo');

    animais.appendChild(novoH1);
```

## Clonar Elementos

Todo elemento selecionado é único. Para criarmos um novo <br>
elemento baseado no anterior, é necessário utilizar o método <br>
**cloneNode()**

```js
    const titulo = document.querySelector('h1');
    const titulo2 = document.querySelector('h1');
    const novoTitulo = titulo;
    // titulo, titulo2 e novoTitulo são iguais

    const cloneTitulo = titulo.cloneNode(true);
    const contato = document.querySelector('.contato');
    contato.appendChild(cloneTitulo);
```

**true** *sinaliza para incluir os* <br>
*filhos*

## Exercício

```js
    // Duplique o menu e adicione ele em copy

    // Selecione o primeiro DT da dl de Faq

    // Selecione o DD referente ao primeiro DT
    
    // Substitua o conteúdo html de .faq pelo de .animais
```