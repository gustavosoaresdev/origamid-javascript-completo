function areaQuadrado(lado) {
    return lado * lado;
}

console.log(areaQuadrado(10));  //  100

/* ================================================================================= */

function pi() {
    return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(pi());

/* ================================================================================= */

function imc(peso, altura) {
    var imc = peso / (altura * altura);
    return imc;
}

console.log(imc(80, 1.8));

/* ================================================================================= */

function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Eu gosto do céu';
    }
    else if (cor === 'verde') {
        return 'Eu gosto de mato';
    }
    else {
        return 'Eu não gosto de cores';
    }
}

console.log(corFavorita('azul'));   //  Eu gosto do céu

/* ================================================================================= */

function mostraConsole() {
    console.log('Oi')
}

addEventListener('click', mostraConsole);

/* ================================================================================= */