# Aula de hoje - String

## String

É a construtora de strings, toda string possui as propriedades e <br>
métodos do prototype de String.

```js
    const comida = 'Pizza';
    const liquido = new String('Água');
    const ano = new String(2022);
```

## str.length

Propriedade com o total de caracteres da string.

```js
    const comida = 'Pizza';
    const frase = 'A melhor comida';

    comida.length; // 5
    frase.length; // 15

    comida[0]; // P
    frase[0]; // A
    frase[frase.length - 1]; // a
```