# Aula de hoje - Dataset

## HTMLElement

Todo elemento HTML do DOM herda propriedades e métodos do <br>
construtor HTMLElement.

```js
    const h1 = document.querySelector('h1');
    Object.prototype.toString.call(h1);
    // [object HTMLHeadingElement]
    // HTMLHeadingElement > HTMLElement > Element > Node >
    // EventTarget > Object
```