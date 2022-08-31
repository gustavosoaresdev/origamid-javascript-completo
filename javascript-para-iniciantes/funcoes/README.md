# Funções

## Funções

Bloco de código que pode ser executado e reutilizado. Valores
podem ser passados por uma função e a mesma retorna outro
valor.

```js
    function areaQuadrado(lado) {
        return lado * lado;
    }

    areaQuadrado(4);    //  16
    areaQuadrado(5);    //  25
    areaQuadrado(2);    //  4
```

*Chamada de function declaration*

```js
    function pi() {
        return 3.14;
    }

    var total = 5 * pi();   //  15.7
```

*Parênteses () executam uma função*

## Parâmetros e Argumentos

Ao **criar** uma função, você pode definir **parâmetros**.
Ao **executar** uma função, você pode passar **argumentos**.

```js
    // peso e altura são os parâmetros
    function imc(peso, altura) {
        const imc = peso / (altura ** 2);
        return imc;
    }

    imc(80, 1.80)   //  80 e 1.80 são os argumentos
    imc(60, 1.70)   //  60 e 1.70 são os argumentos
```

*Separar por vírgula cada*
*parâmetro. Você pode definir*
*mais de um parâmetro ou nenhum*
*também*