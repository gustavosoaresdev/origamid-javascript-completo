# Variáveis

## Antes de Iniciarmos

#### Criar um documento HTML (index.html)

#### Criar um documento JavaScript (script.js)

#### Linkar o script ao html
```html
    <script src="script.js"></script>
```

## Variáveis

Responsáveis por guardar dados na memória. <br>
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

Utilize a vírgula para criar mais de uma variável, sem repetir a <br>
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

## Nome

#### Os nomes podem iniciar com $, _ ou letras.
Podem conter números mas não iniciar com eles

#### Case sensitive
nome é diferente de Nome

#### Não utilizar palavras reservadas
[W3Schools](https://www.w3schools.com/js/js_reserved.asp)

#### Camel case
É comum nomearmos assim: abrirModal

```js
    //  Inválido
    var #nome;
    var function;
    var 1possuiFaculdade;

    //  Válido
    var $selecionar;
    var _nome;
    var possuiFaculdadeNoExterior;
```

## Declarar

Erro ao tentar utilizar uma variável que não foi declarada.

```js
    console.log(nome);
    //  retorna nome is not defined
```

## Hoisting

São movidas para cima do código, porém o valor atribuido não é <br>
movido.

```js
    console.log(nome);
    var nome = 'Gustavo';
    // retorna undefined

    var profissao = 'Designer';
    console.log(profissao);
    //   retorna Designer
```

## Mudar o valor atribuído

É possível mudar os valores atribuídos a variáveis declaradas com <br>
**var** e **let**. Poré não é possível modificar valores das <br>
declaradas com **const**

```js
    var idade = 18;
    idade = 19;

    let preco = 50;
    preco = 25;

    const possuiFaculdade = true;
    possuiFaculdade = false;
    //  retorna um erro
```

## Exercício

Dica rápida, frases (string) devem ser colocadas entre aspas <br>
simples('') ou duplas("") e números não levam aspas.

```js
    //  Declarar uma variável com o seu nome

    //  Declarar uma variável com a sua idade

    //  Declarar uma variável com a sua comida
    //  favorita e não atribuir valor

    //  Atribuir valor a sua comida favorita

    //  Declarar 5 variáveis diferentes sem valores
```