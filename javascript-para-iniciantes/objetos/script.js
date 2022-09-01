var pessoa = {
    nome: 'Gustavo',
    idade: 19,
};

console.log(pessoa.nome);   //  'Gustavo'

/* ================================================================================= */

var quadrado = {
    lados: 4,
    area: function (lado) {
        return lado * lado;
    },
    perimetro: function (lado) {
        return this.lados * lado;
    }
};

console.log(quadrado.area(5));  //  25
console.log(quadrado.perimetro(5)); //  20

/* ================================================================================= */