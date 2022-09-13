# Dimensões e Distâncias

## Height e Width

Estas são propriedades e métodos dos objetos **Element** e
**HTMLElement** , a maioria delas são Read Only

```js
    const section = document.querySelector('.animais');

    section.clientHeight; // height + padding
    section.offsetHeight; // height + padding + border
    section.scrollHeight; // height total, mesmo dentro de scroll
```

*Mesma coisa para o Width,*
*clientWidth...*

## offsetTop e offsetLeft

```js
    const section = document.querySelector('.animais');

    // Distância entre o topo do elemento e o topo da página
    section.offsetTop;

    // Distância entre o canto esquerdo do elemento
    // e o canto esquerdo da página
    section.offsetLeft;
```

## getBoundingClientRect()

Método que retorna um objeto com valores de width, height,
distâncias do elemento e mais.

```js
    const section = document.querySelector('.animais');
    const rect = section.getBoundingClientRect();

    rect.height; // height do elemento
    rect.width; // width do elemento
    rect.top; // distância entre o topo do elemento e o scroll
```

## Window

```js
    window.innerWidth; // width da janela
    window.outerWidth; // soma dev tools também
    window.innerHeight; // height da janela
    window.outerWidth; // soma a barra de endereço

    window.pageYOffset; // distância total do scroll horizontal
    window.pageXOffset; // distância total do scroll vertical

    if(window.innerWidth < 600) {
        console.log('Tela menor que 600px');
    }
```