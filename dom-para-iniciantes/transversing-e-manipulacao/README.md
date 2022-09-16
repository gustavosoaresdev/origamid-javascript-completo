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