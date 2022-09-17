# Navegação por Tabs

## Adicionar Classes para Manipulação

A ideia de navegação por tabs, é ter uma lista de itens que controla <br>
a visualização de uma lista de conteúdo. Cada item da lista possui <br>
um conteúdo relacionado ao mesmo.

```html
    <!-- Primeiro, adicionar classes que irão
    facilitar a manipulação dos elementos -->
    <ul class="animais-lista js-tabmenu">
        ...
    </ul>
    <div class="animais-descricao js-tabcontent">
        ...
    </div>
```

## Selecionar os itens

```js
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');
```