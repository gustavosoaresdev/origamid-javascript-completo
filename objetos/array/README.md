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