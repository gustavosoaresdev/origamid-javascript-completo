function areaQuadrado(lado) {
    return lado * lado;
}

const perimetro = new Function('lado', 'return lado * 4');

/* Dessa forma acima provavelmente nós nunca iremos usar!
Mas é só pra deixar claro que é a mesma coisa que a função
lá de cima (areaQuadrado). */

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

function somar(n1, n2) {
    return n1 + n2;
}

console.log(somar(3, 3));

/* Lembrando, se eu estou executando a função, o que ela me retorna
é um número, então nesse caso eu vou ter métodos e propriedades de (Number). */

// Diferente disso:
console.log(somar.length); // 2

// Porque agora, eu estou falando diretamente com a função mesmo...

console.log(somar.name.toUpperCase()); // 'SOMAR'

/* somar.name, me retorna uma string, portanto eu terei acesso aos
métodos e propriedades de uma (String). */



// Lembrando mais uma vez, o que importa, é sempre o que retorna!!!