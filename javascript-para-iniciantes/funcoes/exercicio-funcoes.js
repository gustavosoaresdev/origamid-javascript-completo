// Crie uma função para verificar se um valor é Truthy
function isTruthy(valor) {
    return !!valor;
}

console.log(isTruthy('gustavo')); //  true

// Crie uma função matemática que retorne o perimetro de um quadrado
// lembrando: perimetro é a soma dos quatro lados do quadrado
function quadrado(lado) {
    return lado * 4;
}

console.log(quadrado(10));  //  40

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto('Gustavo', 'Soares'));

// Crie uma função que verifica se um número é par
function isEven(numero) {
    var modulo = numero % 2;

    if (modulo === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(10));   //  true

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
    return typeof dado;
}

console.log(tipoDeDado(19));    //  number

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento click ocorrer.
addEventListener('click', function () {
    console.log('Gustavo Soares Thomann');
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} paises`;
}

precisoVisitar(20);
jaVisitei(20);