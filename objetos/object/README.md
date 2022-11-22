# Aula de hoje - Object

## Object

Todo objeto é criado com o construtor Object e por isso herda as <br>
propriedades e métodos do seu prototype.

```js
    const carro = {
        marca: 'Ford',
        ano: 2018,
    }

    const pessoa = new Object({
        nome: 'Gustavo',
        idade: 20,
    })
```

## Métodos de Object

**Object.create(obj, defineProperties)** retorna um novo <br>
objeto que terá como protótipo o objeto do primeiro argumento.

```js
    const carro = {
        rodas: 4,
        init(marca) {
            this.marca = marca;
            return this;
        },
        acelerar() {
            return `${this.marca} acelerou as ${this.rodas} rodas`;
        },
        buzinar() {
            return this.marca + ' buzinou';
        }
    }

    const honda = Object.create(carro);
    honda.init('Honda').acelerar();
```

## Object.assign()

**Object.assign(alvo, obj1, obj2)** adiciona ao alvo as <br>
propriedades e métodos enumeráveis dos demais objetos. <br>
O assign irá modificar o objeto alvo.

```js
    const funcaoAutomovel = {
        acelerar() {
            return 'acelerou';
        },
        buzinar() {
            return 'buzinou';
        },
    }

    const moto = {
        rodas: 2,
        capacete: true,
    }

    const carro = {
        rodas: 4,
        mala: true,
    }

    Object.assign(moto, funcaoAutomovel);
    Object.assign(carro, funcaoAutomovel);
```