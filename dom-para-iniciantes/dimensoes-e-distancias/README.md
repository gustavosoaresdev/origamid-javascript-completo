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