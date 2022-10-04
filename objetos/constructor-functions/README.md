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