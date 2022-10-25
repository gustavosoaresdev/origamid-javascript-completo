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