# Seleção de Elementos

## ID

**getElementById** seleciona e retorna elementos do DOM

```js
    // Seleciona pelo ID
    const animaisSection = document.getElementById('animais');
    const contatoSection = document.getElementById('contato');

    // Retorna null caso não exista
    const naoExiste = document.getElementById('teste');
```

*getElementById - pegar elemento pelo ID*

## Classe e Tag

**getElementsByClassName** e **getElementsByTagName**
selecionam e retornam uma lista de elementos do DOM. A lista
retornada está ao vivo, significa que se elementos forem
adicionados, ela será automaticamente atualizada.

```js
    // Seleciona pela classe, retorna uma HTMLCollection
    const gridSection = document.getElementsByClassName('grid-section');
    const contato = document.getElementsByClassName('grid-section contato');

    // Seleciona todas as UL's, retorna uma HTMLCollection
    const ul = document.getElementsByTagName('ul');

    // Retorna o primeiro elemento
    console.log(gridSection[0]);
```

*getElementsByClassName - pegar elementos pela classe*
*getElementsByTagName - pegar elementos pela tag*