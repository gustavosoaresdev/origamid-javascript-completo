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