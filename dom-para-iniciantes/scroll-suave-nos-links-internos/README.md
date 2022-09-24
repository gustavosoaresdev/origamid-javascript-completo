# Scroll suave nos Links Internos

## Adicionar Classe para Manipulação

A ideia do scroll suave, é quando o usuário clicar em qualquer um <br>
dos Links **Internos** do site, rolar suavemente até o link que <br>
ele clicou.

```html
    <!-- Primeiro, adicionar a classe js-menu ao nav -->
    <nav class="menu js-menu">
        ...
    </nav>
```

## Selecionar os Links Internos

```js
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
```

## Adicionar evento a cada Link Interno

```js
    linksInternos.forEach((item) => {
        item.addEventListener('click', scrollToSection);
    })
```