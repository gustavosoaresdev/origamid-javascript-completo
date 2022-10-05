# Constructor Functions

## Objetos

Criar um objeto é simples, basta definirmos uma variável e iniciar a <br>
definição do seu valor com chaves **{}**. Mas e se precisarmos criar <br>
um novo objeto, com as mesmas características do anterior? É <br>
possível com o **Object.create**, mas veremos ele mais tarde.

```js
    const carro = {
        marca: 'Marca',
        preco: 0,
    }

    const honda = carro;
    honda.marca = 'Honda';
    honda.preco = 4000;

    const fiat = carro;
    fiat.marca = 'Fiat';
    fiat.preco = 3000;
```

*carro, fiat e honda apontam para* <br>
*o mesmo objeto.*

## Constructor Functions

Para isso existem as Constructor Functions, ou seja, Funções <br>
Construtoras que são responsáveis por construir novos objetos <br>
sempre que chamamos a mesma.

```js
    function Carro() {
        this.marca = 'Marca';
        this.preco = 0;
    }

    const honda = new Carro();
    honda.marca = 'Honda';
    honda.preco = 4000;

    const fiat = new Carro();
    fiat.marca = 'Fiat';
    fiat.preco = 3000;
```

*Usar Pascal Case, ou seja,* <br>
*começar com letra maiúscula.*

## new Keyword

A palavra chave **new** é responsável por criar um novo objeto <br>
baseado na função que passarmos a frente dela.

```js
    const honda = new Carro();

    // 1º Cria um novo objeto
    honda = {};

    // 2º Define o protótipo
    honda.prototype = Carro.prototype;

    // 3º Aponta a variável this para o objeto
    this = honda;

    // 4º Executa a função, substituindo this pelo objeto
    honda.marca = 'Marca';
    honda.preco = 0;

    // 5º Retorna o novo objeto
    return honda = {
        marca: 'Marca',
        preco: 0,
    }
```

## Parâmetros e Argumentos

Podemos passar argumentos que serão utilizados no momento da <br>
criação do objeto.

```js
    function Carro(marca, preco) {
        this.marca = marca;
        this.preco = preco;
    }

    const honda = new Carro('Honda', 3000);
    const fiat = new Carro('Fiat', 4000);
```

## this Keyword

O **this** faz referência ao próprio objeto construído com a <br>
Constructor Function.

```js
    function Carro(marca, precoInicial) {
        const taxa = 1.2;
        const precoFinal = precoInicial * taxa;
        this.marca = marca;
        this.preco = precoFinal;

        console.log(this);
    }

    const honda = new Carro('Honda', 2000);
```

*Variáveis dentro da Constructor* <br>
*estão "protegidas".*

## Exemplo Real

Quando mudamos a propriedade seletor, o objeto Dom irá passar a <br>
selecionar o novo seletor em seus métodos.

```js
    const Dom = {
        seletor: 'li',
        element() {
            return document.querySelector(this.seletor);
        },
        ativo() {
            this.element().classList.add('ativo');
        },
    }

    Dom.ativo(); // adiciona ativo ao li
    Dom.seletor = 'ul';
    Dom.ativo(); // adiciona ativo ao ul
```