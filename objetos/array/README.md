# Aula de hoje - Array

## Arrays

Arrays armazenam uma coleção de elementos. Estes podem ser <br>
strings, arrays, boolean, number, functions, objects e mais.

```js
    const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
    const precos = [49, 99, 69, 89];

    const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor:
    'Azul', preco: 2000}], function andar(nome) { console.log(nome)
    }];

    dados[2]('Ford');
    dados[1][2].cor; // azul
```

## Construção de Arrays

Toda array herda os métodos e propriedades do protótipo do <br>
construtor Array.

```js
    const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
    const carros = new Array('Corola', 'Mustang', 'Honda');

    carros[1] // Mustang
    carros[2] = 'Ferrari';
    carros[10] = 'Parati';
    carros.length; // 11
```

*Os valores das array's não são* <br>
*estáticos*

## Array.from()

Array.from() é um método utilizado para transformar array-like <br>
objects, em uma array.

```js
    let li = document.querySelectorAll('li'); // NodeList
    li = Array.from(li); // Array

    const carros = {
        0: 'Fiat',
        1: 'Honda',
        2: 'Ford',
        length: 4,
    }

    const carrosArray = Array.from(carros);
```

## Array.isArray()

Verifica se o valor passado é uma array e retorna um valor <br>
booleano.

```js
    let li = document.querySelectorAll('li'); // NodeList
    Array.isArray(li); // false

    li = Array.from(li); // Array
    Array.isArray(li); // true
```

## Array.of(), Array() e new Array()

A palavra chave **new** não é necessária para utilizar o
construtor Array.

```js
    Array.of(10); // [10]
    Array.of(1,2,3,4); // [1,2,3,4]
    new Array(5); // [,,,,]
    Array(5); // [,,,,]
    Array(1,2,3,4); // [1,2,3,4]
```

## Propriedades e Métodos do Prototype

**[].length** retorna o tamanho da array.

```js
    const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
    frutas.length; // 3

    frutas[0].length; // 6
    frutas[1].length; // 5
    frutas[2].length; // 2
```

## Métodos Modificadores [].sort()

Os próximos métodos que vamos falar sobre, são métodos <br>
modificadores (mutator methods). Além de retornarem um valor, <br>
eles modificam a array original. **[].sort()** organiza a pelo <br>
unicode.

```js
    const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
    instrumentos.sort();
    instrumentos; // ['Baixo', 'Guitarra', Violão]
    
    const idades = [32,21,33,43,1,12,8];
    idades.sort();
    idades; // [1, 12, 21, 32, 33, 43, 8]
```