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