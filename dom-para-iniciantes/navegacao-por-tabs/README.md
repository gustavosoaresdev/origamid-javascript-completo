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

## Função Callback

Recebe index como parâmetro para ativar a tab. Sempre que ativar, <br>
remove a classe ativo de todos os outros elementos.

```js
    function activeTab(index) {
        tabContent.forEach((content) => {
            content.classList.remove('ativo');
        });

        tabContent[index].classList.add('ativo');
    }
```

## Adicionar o Evento

Neste caso precisamos passar antes a fução anônima no callback, <br>
para podermos passar o index como argumento de activeTab

```js
    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        });
    });
```

## Animação com CSS

Animação simples com css, sai de display none para display block.

```css
    .js .js-tabcontent section {
        display: none;
    }

    .js-tabcontent section.ativo {
        display: block !important;
        animation: show .5s forwards;
    }

    @keyframes show {
        from {
            opacity: 0;
            transform: translate3d(-30px, 0, 0);
        }

        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
```