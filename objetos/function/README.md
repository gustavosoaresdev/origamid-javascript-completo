# Aula de hoje - Function

## Function

Toda função é criada com o construtor Function e por isso herda <br>
as suas propriedades e métodos.

```js
    function areaQuadrado(lado) {
        return lado * lado;
    }

    const perimetroQuadrado = new Function('lado', 'return lado * 4');
```

## Propriedades

**Function.length** retorna o total de argumentos da função. <br>
**Function.name** retorna uma string com o nome da função.

```js
    function somar(n1, n2) {
        return n1 + n2;
    }

    somar.length; // 2
    somar.name; // 'somar'
```

## function.call()

**function.call(this, arg1, arg2, ...)** executa a função, <br>
sendo possível passarmos uma nova referência ao **this** da <br>
mesma.

```js
    const carro = {
        marca: 'Ford',
        ano: 2018
    }

    function descricaoCarro() {
        console.log(this.marca + ' ' + this.ano);
    }

    descricaoCarro(); // undefined undefined
    descricaoCarro.call(); // undefined undefined
    descricaoCarro.call(carro); // Ford 2018
```