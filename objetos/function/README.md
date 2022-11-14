# Aula de hoje - Function

## Function

Toda função é criada com o construtor Function e por isso herda <br>
as suas propriedades e métodos.

```js
    function areaQuadrado(lado) {
        return lado * lado;
    }

    const perimetroQuadrado = new Function('lado', 'return lado * 4');
```

## Propriedades

**Function.length** retorna o total de argumentos da função. <br>
**Function.name** retorna uma string com o nome da função.

```js
    function somar(n1, n2) {
        return n1 + n2;
    }
    
    somar.length; // 2
    somar.name; // 'somar'
```