# Variáveis

## Antes de Iniciarmos

#### Criar um documento HTML (index.html)

#### Criar um documento JavaScript (script.js)

#### Linkar o script ao html
```html
    <script src="script.js"></script>
```

## Variáveis

Responsáveis por guardar dados na memória.
Inicia com a palavra **var**, **let** ou **const**

```js
    var nome = 'Gustavo';
    let idade = 19;
    const possuiFaculdade = false;
```

## Evitam repetições

DRY (Don't repeat yourself)

```js
    var preco = 20;
    var totalComprado = 5;
    var precoTotal = preco * totalComprado;
```

## Sintaxe

Palavra chave **var** seguida do nome, sinal de igual e o valor.

```js
    var nome = 'Gustavo';
    var idade = 19;
    var possuiFaculdade = false;
```

## Vírgula

Utilize a vírgula para criar mais de uma variável, sem repetir a
palavra chave **var**

```js
    var nome = 'Gustavo',
        idade = 19,
        possuiFaculdade = false;
```

## Sem valor

Pode declarar ela e não atribuir valor inicialmente.

```js
    var precoAplicativo;
    //  retorna undefined
```