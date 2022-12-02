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

## Dataset

**dataset** é uma propriedade de HTMLElement, essa propriedade é <br>
um objeto do tipo DOMStringMap. Dentro desse objeto existe uma <br>
coleção de chave / valor, com todos os atributos do elemento html <br>
que começarem com **data-**.

```html
    <div data-cor="azul" data-width="500">Uma Div</div>
    <span data-anime="left" data-tempo="2000">Um Span</span>
```

```js
    // Ambos os valores selecionam a mesma div acima.
    let div = document.querySelector('div');
    div = document.querySelector('[data-cor]');
    div = document.querySelector('[data-cor="azul"]');

    div.dataset;
    // DOMStringMap {cor: "azul", width: "500"}
    div.dataset.cor; // 'azul'
    div.dataset.width; // '500'
    div.dataset.tempo = 1000;
    // DOMStringMap {cor: "azul", width: "500", tempo: "1000"}
```