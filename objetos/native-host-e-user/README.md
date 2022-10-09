# Native, host e user

## Native

Objetos nativos são aqueles definidos na especificação da <br>
linguagem e são implementados independente do host.

```js
    // Construtores de objetos nativos
    Object
    String
    Array
    Function
```

## Host

Objetos do host são aqueles implementados pelo próprio ambiente. <br>
Por exemplo no browser possuímos objetos do DOM, como <br>
DomList, HTMLCollection e outros. Em Node.js os objetos do Host <br>
são diferentes, já que não estamos em um ambiente do browser.

```js
    // Objetos do browser
    NodeList
    HTMLCollection
    Element
```

## User

Objetos do user, são os objetos definidos pelo seu aplicativo. Ou <br>
seja, qualquer objeto que você criar ou que importar de alguma <br>
biblioteca externa.

```js
    const Pessoa = {
        nome: 'Gustavo';
    }
```

## Diferentes versões

- ### Browsers diferentes
Apesar de tentarem ao máximo manter um padrão, browsers diferentes <br>
possuem objetos com propriedades e métodos diferentes.

- ### Versões de browsers
Sempre que o browser é atualizado, novos objetos, métodos e propriedades <br>
podem ser implementados.

- ### Host e Native Objects
Por exemplo, browsers que não implementaram o ECMAScript 2015 (ES6), <br>
não possuem o método find de Array.

## Versões de JavaScript

- ### ECMA
Organização responsável por definir padrões para tecnologias. ECMAScript é <br>
o padrão de JavaScript.

- ### ECMAScript 2015 ou ES6
ES é uma abreviação de ECMAScript, ES6 é a sexta versão do ECMAScript, <br>
que foi lançada em 2015. Por isso ECMAScript 2015 é igual a ES6. A partir da <br>
ES6, existe uma tendência anual de atualizações. ECMAScript 2015, 2016, <br>
2017, 2018 e Next.

- ### Engine
Existem diversas engines que implementam o ECMAScript como V8, <br>
SpiderMonkey, Chakra, JavaScriptCore e mais.