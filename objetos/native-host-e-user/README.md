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