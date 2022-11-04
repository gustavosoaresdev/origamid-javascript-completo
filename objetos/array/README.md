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

## [].unshift() e [].push()

**[].unshift()** adiciona elementos ao início da array e retorna o <br>
length da mesma. **[].push()** adiciona elementos ao final da <br>
array e retorna o length da mesma.

```js
    const carros = ['Ford', 'Fiat', 'VW'];
    carros.unshift('Honda', 'Kia'); // 5
    carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

    carros.push('Ferrari'); // 6
    carros; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];
```

## [].shift() e [].pop()

**[].shift()** remove o primeiro elemento da array e retorna o <br>
mesmo. **[].pop()** remove o último elemento da array e retorna <br>
o mesmo.

```js
    const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
    const primeiroCarro = carros.shift(); // 'Ford'
    carros; // ['Fiat', 'VW', 'Honda'];

    const ultimoCarro = carros.pop(); // 'Honda'
    carros; // ['Fiat', 'VW'];
```

## [].reverse()

**[].reverse()** inverte os itens da array e retorna a nova array.

```js
    const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
    carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];
```

## [].splice()

**[].splice(index, remover, item1, item2, ...)** adiciona <br>
valores na array a partir do index. Remove a quantidade de itens <br>
que for passada no segundo parâmetro (retorna esses itens).

```js
    const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
    carros.splice(1, 0, 'Kia', 'Mustang'); // []
    carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

    carros.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
    carros; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']
```

## [].copyWithin()

**[].copyWithin(alvo, inicio, final)** a partir do alvo, ele <br>
irá copiar a array começando do inicio até o final e vai preencher a <br>
mesma com essa cópia. Caso omita os valores de início e final, ele <br>
irá utilizar como inicio o 0 e final o valor total da array.

```js
    ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
    // ['Item1', 'Item2', 'Item1', 'Item2']

    ['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
    // ['Item1', 'Item2', 'Item3', 'Item1']
```

## [].fill()

**[].fill(valor, inicio, final)** preenche a array com o <br>
valor, do início até o fim.

```js
    ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
    // ['Banana', 'Banana', 'Banana', 'Banana']

    ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
    // ['Item1', 'Item2', 'Banana', 'Banana']
    
    ['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
    // ['Item1', 'Banana', 'Banana', 'Item4']
```