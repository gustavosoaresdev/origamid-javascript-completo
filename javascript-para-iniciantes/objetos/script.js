var pessoa = {
    nome: 'Gustavo',
    idade: 19,
};

console.log(pessoa.nome);   //  'Gustavo'

/* ================================================================================= */

var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    },
    greeting() {
        return 'Olá! :D';
    }
};

console.log(quadrado.area(5));  //  25
console.log(quadrado.perimetro(5)); //  20
console.log(quadrado.greeting());   //  'Olá! :D'

/* ================================================================================= */