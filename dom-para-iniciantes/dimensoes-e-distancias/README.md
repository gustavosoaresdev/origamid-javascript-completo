# Dimensões e Distâncias

## Height e Width

Estas são propriedades e métodos dos objetos **Element** e <br>
**HTMLElement** , a maioria delas são Read Only

```js
    const section = document.querySelector('.animais');

    section.clientHeight; // height + padding
    section.offsetHeight; // height + padding + border
    section.scrollHeight; // height total, mesmo dentro de scroll
```

*Mesma coisa para o Width,* <br>
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

## getBoundingClientRect()

Método que retorna um objeto com valores de width, height,
distâncias do elemento e mais.

```js
    const section = document.querySelector('.animais');
    const rect = section.getBoundingClientRect();

    rect.height; // height do elemento
    rect.width; // width do elemento
    rect.top; // distância entre o topo do elemento e o scroll
```

## Window

```js
    window.innerWidth; // width da janela
    window.outerWidth; // soma dev tools também
    window.innerHeight; // height da janela
    window.outerWidth; // soma a barra de endereço

    window.pageYOffset; // distância total do scroll horizontal
    window.pageXOffset; // distância total do scroll vertical

    if(window.innerWidth < 600) {
        console.log('Tela menor que 600px');
    }
```

## matchMedia()

Utilize um media-querie como no CSS para verificar a largura do
browser

```js
    const small = window.matchMedia('(max-width: 600px)');

    if(small.matches) {
        console.log('Tela menor que 600px')
    }
    else {
        console.log('Tela maior que 600px')
    }
```

## Dica

* Selecione o elemento no inspetor (DOM)

* Abra o console e digite $0 para selecionar o mesmo

* Os elementos selecionados anteriormente são $1, $2 ...

## Exercício

```js
    // Verifique a distância da primeira imagem
    // em relação ao topo da página

    // Retorne a soma da largura de todas as imagens

    // Verifique se os links da página possuem
    // o mínimo recomendado para telas utilizadas
    // com o dedo. (48px/48px de acordo com o google)
    
    // Se o browser for menor que 720px,
    // adicione a classe menu-mobile ao menu
```
