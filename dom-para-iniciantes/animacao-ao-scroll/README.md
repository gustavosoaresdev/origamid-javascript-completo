# Animação ao Scroll

## Adicionar classes para manipulação

A ideia da animação ao scroll, é quando o usuário rolar para baixo, <br>
fazer com que as **sections** apareça lentamente. Assim fazendo <br>
com que não fica uma coisa muito seca...

```html
    <!-- Primeiro, adicionar a classe js-scroll a todas as sections -->
    <section class="grid-section animais js-scroll" id="animais">
        ...
    <section>
    <section class="grid-section faq js-scroll" id="faq">
        ...
    <section>
    <section class="grid-section contato js-scroll" id="contato">
        ...
    <section>
```

## Selecionar todas as sections que possui a classe (js-scroll)

```js
    const sections = document.querySelectorAll('.js-scroll');
```

## Adicionar evento Scroll

Lembrando que o evento de **scroll** é no **window**.

```js
    function animaScroll() {
        // código...
    }

    window.addEventListener('scroll', animaScroll);
```

## Verificar cada elemento (section) em relação ao topo

Ao verificar se cada elemento (section) for menor <br>
do que 0 em relação ao topo, adicionar a classe **ativo** <br>
a section.

```js
    function animaScroll() {
        sections.forEach((item) => {
            const sectionTop = item.getBoundingClientRect().top;
            if(sectionTop < 0) {
                item.classList.add('ativo');
            }
        })
    }
```

*Primeiro, tem que saber* <br>
*que distância que cada* <br>
*elemento (section) está* <br>
*do topo.*

## Animação com CSS

```css
    .js .js-scroll {
        opacity: 0;
        transform: translate3d(-30px, 0, 0);
    }

    .js .js-scroll.ativo {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: .3s;
    }
```