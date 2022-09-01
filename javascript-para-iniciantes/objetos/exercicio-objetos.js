//  Crie um objeto com os seus dados pessoais
//  Deve possuir pelo menos duas propriedades, nome e sobrenome
var meusDados = {
    nome: 'Gustavo',
    sobrenome: 'Soares Thomann',
    idade: 19,
    endereço: {
        estado: 'Rio Grande do Sul',
        cidade: 'Tal tal...',
        numero: '123',
    }
}

//  Crie um método no objeto anterior, que mostre o seu nome completo
meusDados.showName = function () {
    return `${this.nome} ${this.sobrenome}`;
}

//  Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;

//  Crie um objeto de um cachorro que represente um labrador,
//  preto com 10 anos, que late ao ver um homem
var dog = {
    raca: 'Labrador',
    cor: 'Preto',
    idade: 10,
    latir(pessoa) {
        if (pessoa === 'homem') {
            return 'Latir';
        }
        else {
            return 'Não faz nada';
        }
    }
};

console.log(dog.latir('mulher'));   //  Não faz nada