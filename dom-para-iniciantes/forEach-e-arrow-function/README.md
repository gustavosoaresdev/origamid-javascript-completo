# forEach e Arrow Function

## forEach

Constantemente vamos selecionar uma lista de itens do dom. A
melhor forma para interagirmos com os mesmos é utilizando o
método forEach.

```js
    const imgs = document.querySelectorAll('img');

    imgs.forEach(function(item){
        console.log(item);
    });
```