# Aula de hoje - Array e Iteração

## [].forEach()

**[].forEach(callback(itemAtual, index, array))** a função de <br>
callback é executada para cada item da array. Ela possui <br>
três argumentos, (itemAtual, valorDoIndex, arrayOriginal).

```js
    const carros = ['Ford', 'Fiat', 'Honda'];

    // com função tradicional
    carros.forEach(function(item, index, array) {
        console.log(item.toUpperCase());
    });

    // com Arrow Function
    carros.forEach((item, index, array) => {
        console.log(item.toUpperCase());
    });
```

*O método sempre retorna* <br>
*undefined*

## Arrow Function

```js
    const li = document.querySelectorAll('li');

    li.forEach(i => i.classList.add('ativo'));

    // o código acima, é a mesma coisa que isso:
    li.forEach(function(item) {
        item.classList.add('ativo');
    });
```

## Modificar a Array Original

O terceiro argumento do callback (array) é uma referência <br>
direta e se modificado irá também modificar a array original.

```js
    const carros = ['Ford', 'Fiat', 'Honda'];
    carros.forEach((item, index, array) => {
        array[index] = 'Carro ' + item;
    });

    carros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']
```

*É melhor utilizarmos o map para* <br>
*isso*

## [].map()

**[].map(callback(itemAtual, index, array))** funciona da <br>
mesma forma que o forEach(), porém ao invés de retornar <br>
undefined, retorna uma nova array com valores atualizados de <br>
acordo com o return de cada iteração.

```js
    const carros = ['Ford', 'Fiat', 'Honda'];
    const newCarros = carros.map((item) => {
        return 'Carro ' + item;
    });
    
    carros; // ['Ford', 'Fiat', 'Honda']
    newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda'];
```

## Valor Retornado

Se não retornarmos nenhum valor durante a iteração utilizando <br>
map, o valor retornado como de qualquer função que não possui o <br>
return, será undefined.

```js
    const carros = ['Ford', 'Fiat', 'Honda'];
    const newCarros = carros.map((item) => {
        const novoValor = 'Carro ' + item;
    });

    newCarros; // [undefined, undefined, undefined];
```

## Arrow Function e [].map()

Uma Arrow Function de linha única e sem chaves, irá retornar o <br>
valor após a fat arrow **=>**.

```js
    const numeros = [2, 4, 6, 8, 10, 12, 14];
    const numerosX3 = numeros.map(n => n * 3);

    numerosX3; // [6, 12, 18, 24, 30, 36, 42];
```

## [].map() vs [].forEach()

Se o objetivo for modificar os valores da array atual, sempre utilize <br>
o map, pois assim uma nova array com os valores modificados é <br>
retornada e você pode imediatamente iterar novamente sobre <br>
estes valores.

```js
    const numeros = [2, 4, 6, 8, 10, 12, 14];
    const numerosX3 = numeros.map(n => n * 3);

    numerosX3; // [6, 12, 18, 24, 30, 36, 42];
```

## [].map() com Objetos

Map pode ser muito útil para interagirmos com uma array de <br>
objetos, onde desejamos isolar um valor único de cada objeto.

```js
    const aulas = [
        {
            nome: 'HTML 1',
            min: 15,
        },
        {
            nome: 'HTML 2',
            min: 10,
        },
        {
            nome: 'CSS 1',
            min: 20,
        },
        {
            nome: 'JS 1',
            min: 25,
        },
    ]

    // [15, 10, 20, 25];

    const puxarNomes = aula => aula.nome;
    const nomesAulas = aulas.map(puxarNomes);
    // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']
```

## [].reduce()

**[].reduce(callback(acumulador, valorAtual, index, array), valorInicial)** <br>
executa a função de callback para cada item da Array. Um valor <br>
especial existe nessa função de callback, ele é chamado de <br>
acumulador, mas é na verdade apenas o retorno da iteração <br>
anterior.

```js
    const aulas = [10, 25, 30];
    const total1 = aulas.reduce((acumulador, atual) => {
        return acumulador + atual;
    });

    total1; // 65

    const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
    total2; // 165
```

## Reduce passo a passo 1

O primeiro parâmetro do callback é o valor do segundo argumento <br>
passado no reduce(callback, inicial) durante a primeira iteração. <br>
Nas iterações seguintes este valor passa a ser o retornado pela <br>
anterior.

```js
    const aulas = [10, 25, 30];

    // 1
    aulas.reduce((0, 10) => {
        return 0 + 10;
    }, 0); // retorna 10

    // 2
    aulas.reduce((10, 25) => {
        return 10 + 25;
    }, 0); // retorna 35

    // 3
    aulas.reduce((35, 30) => {
        return 35 + 30;
    }, 0); // retorna 65
```

## Reduce passo a passo 2

Se não definirmos o valor inicial do acumulador, ele irá **pular** a <br>
primeira iteração e começara a partir da segunda. Neste caso o <br>
valor do acumulador será o valor do item da primeira iteração.

```js
    const aulas = [10, 25, 30];

    // 1
    aulas.reduce((10, 25) => {
        return 10 + 25;
    }) // retorna 35
    
    // 2
    aulas.reduce((35, 30) => {
        return 35 + 30;
    }) // retorna 65
```

## Maior valor com [].reduce()

```js
    const numeros = [10, 25, 60, 5, 35, 10];

    const maiorValor = numeros.reduce((anterior, atual) => {
        return anterior > atual ? anterior : atual;
    });

    maiorValor; // 60
```

## Podemos retornar outros valores

```js
    const aulas = [
        {
            nome: 'HTML 1',
            min: 15,
        },
        {
            nome: 'HTML 2',
            min: 10,
        },
        {
            nome: 'CSS 1',
            min: 20,
        },
        {
            nome: 'JS 1',
            min: 25,
        },
    ]

    const listaAulas = aulas.reduce((acumulador, atual, index) => {
        acumulador[index] = atual.nome;
        return acumulador;
    }, {})
```