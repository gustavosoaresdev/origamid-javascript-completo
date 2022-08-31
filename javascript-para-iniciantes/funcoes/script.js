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

function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(20, 1.8);  //  undefined
console.log(imc2(1000, 1.80));  //  retorna o imc e undefined

/* ================================================================================= */

function terceiraIdade(idade) {
    if (typeof idade !== 'number') {
        return 'Por favor preencha um número'
    }
    else if (idade >= 60) {
        return true;
    }
    else {
        return false;
    }
}

console.log(terceiraIdade('oi'));   //  Por favor preencha um número

/* ================================================================================= */

function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Falta visitar ${totalPaises - paisesVisitados} paises`;
}

console.log(faltaVisitar(20));  //  Falta visitar 173 paises

/* se quiser usar a variável totalPaises de fora da função,
é bem simples, basta criar a variável de fora da função. */

//  Ex:

var totalPaises = 193;
function faltaVisitar2(paisesVisitados) {
    return `Falta visitar ${totalPaises - paisesVisitados} paises`;
}

console.log(totalPaises);   //  193

/* ================================================================================= */