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

## str.charAt(n)

Retorna o caracter de acordo com o index de (n).

```js
    const linguagem = 'JavaScript';

    linguagem.charAt(0); // J
    linguagem.charAt(2); // v
    linguagem.charAt(linguagem.length - 1); // t
```

## str.concat(str2, str3, ...)

Concatena as strings e retorna o resultado.

```js
   const frase = 'A melhor linguagem é ';
   const linguagem = 'JavaScript';

   const fraseCompleta = frase.concat(linguagem, '!!');
```

## str.includes(search, position)

Procura pela string exata dentro de outra string. A procura é <br>
case sensitive.

```js
    const fruta = 'Banana';
    const listaFrutas = 'Melancia, Banana, Laranja';
    
    listaFrutas.includes(fruta); // true
    fruta.includes(listaFrutas); // false
```