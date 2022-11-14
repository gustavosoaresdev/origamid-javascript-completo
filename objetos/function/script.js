function areaQuadrado(lado) {
    return lado * lado;
}

const perimetro = new Function('lado', 'return lado * 4');

/* Dessa forma acima provavelmente nós nunca iremos usar!
Mas é só pra deixar claro que é a mesma coisa que a função
lá de cima (areaQuadrado). */

/* ================================================================================= */