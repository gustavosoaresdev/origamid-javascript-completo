# Classes e Atributos

## classList

Retorna uma lista com as classes do elemento. Permite adicionar,
remover e verificar se contém.

```js
    const menu = document.querySelector('.menu');

    menu.className; // string
    menu.classList; // lista de classes
    menu.classList.add('ativo'); // add uma classe
    menu.classList.add('ativo', 'mobile'); // add duas classes
    menu.classList.remove('ativo'); // remove uma classe
    menu.classList.toggle('ativo'); // add/remove a classe
    menu.classList.contains('ativo'); // true ou false
    menu.classList.replace('ativo', 'inativo'); // troca uma pela outra
```

## attributes

Retorna uma array-like com os atributos do elemento.

```js
    const animais = document.querySelector('.animais');

    animais.attributes; // retorna todos os atributos
    animais.attributes[0]; // retorna o primeiro atributo
```

## getAttribute e setAttribute

Métodos que retornam ou definem de acordo com o atributo
selecionado

```js
    const img = document.querySelector('img');

    img.getAttribute('src'); // valor do src
    img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
    img.hasAttribute('id'); // true / false
    img.removeAttribute('alt'); // remove o alt
    img.hasAttributes(); // true / false se tem algum atributo
```

*É muito comum métodos de get e set;*