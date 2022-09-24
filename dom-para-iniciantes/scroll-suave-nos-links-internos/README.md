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

## Chamar section especifica pela ID ao click de cada Link Interno

```js
    function scrollToSection(event) {
        event.preventDefault();

        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
    }
```

## E agora, como que eu faço o scroll suave?

Bom, vou mostrar dois novos métodos de fazer o scroll suave; <br>
Com o método **window.scrollTo()** e **Element.scrollIntoView()**

```js
    function scrollToSection(event) {
        event.preventDefault();

        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const sectionTop = section.offsetTop;

        // 1º método, window.scrollTo() forma alternativa
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth',
        })

        // 2º método, Element.scrollIntoView()
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }
```

*Caso você queira saber mais:* <br>
[Window.ScrollTo()](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/scrollTo) <br>
[Element.scrollIntoView()](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/scrollIntoView)
