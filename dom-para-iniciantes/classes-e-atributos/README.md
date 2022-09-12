# Classes e Atributos

## classList

Retorna uma lista com as classes do elemento. Permite adicionar,
remover e veri car se contém.

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