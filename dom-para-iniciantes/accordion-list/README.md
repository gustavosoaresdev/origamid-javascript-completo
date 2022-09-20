# Accordion List

## Adicionar Classe para Manipulação

A ideia do Accordion List, é esconder o elemento **DD** <br>
e ao clicar em cima de cada **DT**, ativar a classe **ativo** <br>
ao elemento clicado, e no próximo elemento também. Assim <br>
mostrando o conteudo.

```html
    <!-- Primeiro, adicionar a classe js-accordion
    a dl -->
    <dl class="faq-lista js-accordion">
        ...
    </dl>
```

## Selecionar cada DT

```js
    const accordionList = document.querySelectorAll('.js-accordion dt');
```

## Adicionar classe **ativo** a cada DT e DD ao click

```js
    function activeAccordion() {
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    })
```

## Animação com CSS

Animação simples com css, sai de display none para display block, <br>
com uma flecha indo de baixo para cima ao clicar na **DT**.

```css
    .js .js-accordion dd {
        display: none;
    }

    .js-accordion dt::after {
        content: '\2BC6';
        margin-left: 10px;
    }

    .js-accordion dt.ativo::after {
        content: '\2BC5';
    }

    .js-accordion dd.ativo {
        display: block;
        animation: slideDown .5s forwards;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            max-height: 0;
        }

        to {
            opacity: 1;
            max-height: 300px;
        }
    }
```