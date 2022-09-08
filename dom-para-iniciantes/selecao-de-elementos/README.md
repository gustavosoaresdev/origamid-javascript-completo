# Seleção de Elementos

## ID

**getElementById** seleciona e retorna elementos do DOM

```js
    // Seleciona pelo ID
    const animaisSection = document.getElementById('animais');
    const contatoSection = document.getElementById('contato');

    // Retorna null caso não exista
    const naoExiste = document.getElementById('teste');
```

*getElementById - pegar elemento pelo ID*

## Classe e Tag

**getElementsByClassName** e **getElementsByTagName**
selecionam e retornam uma lista de elementos do DOM. A lista
retornada está ao vivo, significa que se elementos forem
adicionados, ela será automaticamente atualizada.

```js
    // Seleciona pela classe, retorna uma HTMLCollection
    const gridSection = document.getElementsByClassName('grid-section');
    const contato = document.getElementsByClassName('grid-section contato');

    // Seleciona todas as UL's, retorna uma HTMLCollection
    const ul = document.getElementsByTagName('ul');

    // Retorna o primeiro elemento
    console.log(gridSection[0]);
```

*getElementsByClassName - pegar elementos pela classe*
*getElementsByTagName - pegar elementos pela tag*

## Seletor Geral Único

**querySelector** retorna o primeiro elemento que combinar com
o seu seletor CSS.

```js
    const animais = document.querySelector('.animais');
    const contato = document.querySelector('#contato');
    const ultimoItem = document.querySelector('.animais-lista li:last-child');
    const linkCSS = document.querySelector('[href^="https://"]');
    const primeiroUl = document.querySelector('ul');

    // Busca dentro do Ul apenas
    const navItem = primeiroUl.querySelector('li');
```

*querySelector é o seletor de*
*elementos mais comum.*
*É o que mais vamos usar no curso.*