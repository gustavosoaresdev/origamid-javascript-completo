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