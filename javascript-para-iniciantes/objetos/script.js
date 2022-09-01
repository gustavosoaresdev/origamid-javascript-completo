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

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
};

menu.backgroundColor = '#000';

/* você pode também adicionar novas propriedades e
métodos no objeto! */

menu.color = 'blue';
menu.boxSizing = 'border-box';
menu.andar = function (nome) {
    return `${nome} andou`;
}

/* e assim vai... pode adicionar quantas propriedades e 
métodos você quiser...*/

var bg = menu.backgroundColor;  //  '#000'

/* ================================================================================= */

var height = 120;
var menu = {
    width: 800,
    height: 50,
    metadeHeight() {
        return this.height / 2;
    }
}

console.log(menu.metadeHeight());   //  25

/* o this é o próprio objeto, seria mesma coisa se eu fizesse isso: */
return menu.height / 2;

/* se não usar o this, ele pega a variável height que está fora do objeto. */

/* ================================================================================= */