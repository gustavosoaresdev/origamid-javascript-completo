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

## This

O valor de this faz referência ao objeto criado durante a <br>
construção do objeto (Constructor Function). Podemos trocar a <br>
referência do método ao this, utilizando o **call()**.

```js
    const carros = ['Ford', 'Fiat', 'VW'];

    carros.forEach((item) => {
        console.log(item);
    }); // Log de cada Carro

    carros.forEach.call(carros, (item) => {
        console.log(item);
    }); // Log de cada Carro

    const frutas = ['Banana', 'Pêra', 'Uva'];

    carros.forEach.call(frutas, (item) => {
        console.log(item);
    }); // Log de cada Fruta
```

## Exemplo Real

O objeto atribuído a **lista** será o substituído pelo primeiro <br>
argumento de **call()**

```js
    function Dom(seletor) {
        this.element = document.querySelector(seletor);
    };

    Dom.prototype.ativo = function(classe) {
        this.element.classList.add(classe);
    };

    const lista = new Dom('ul');
    lista.ativo('ativar');
    console.log(lista);
```

## O objeto deve ser parecido

O novo valor de this deve ser semelhante a estrutura do valor do <br>
this original do método. Caso contrário o método não conseguirá <br>
interagir de forma correta com o novo this.

```js
    const novoSeletor = {
        element: document.querySelector('li')
    }

    Dom.prototype.ativo.call(novoSeletor, 'ativar');
```

## Array's e Call

É comum utilizarmos o **call()** nas funções do protótipo do <br>
construtor Array. Assim podemos estender todos os métodos de <br>
Array à objetos que se parecem com uma Array (array-like).

```js
    Array.prototype.mostreThis = function() {
        console.log(this);
    }

    const frutas = ['Uva', 'Maçã', 'Banana'];
    frutas.mostreThis(); // ['Uva', 'Maçã', 'Banana']

    Array.prototype.pop.call(frutas); // Remove Banana
    frutas.pop(); // Mesma coisa que a função acima
```

## Array-like

HTMLCollection, NodeList e demais objetos do Dom, são parecidos <br>
com uma array. Por isso conseguimos utilizar os mesmos na <br>
substituição do this em call.

```js
    const li = document.querySelectorAll('li');

    const filtro = Array.prototype.filter.call(li, function(item) {
        return item.classList.contains('ativo');
    });
    
    filtro; // Retorna os itens que possuem ativo
```

## function.apply()

O **apply(this, [arg1, arg2, ...])** funciona como o call, a
única diferença é que os argumentos da função são passados
através de uma array.

```js
    const numeros = [3,4,6,1,34,44,32];
    Math.max.apply(null, numeros);
    Math.max.call(null, 3, 4, 5, 6, 7, 20);
    
    // Podemos passar null para o valor
    // de this, caso a função não utilize
    // o objeto principal para funcionar
```