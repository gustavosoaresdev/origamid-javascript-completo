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