const pessoa = new Object({
    nome: 'Gustavo',
    idade: 20,
    andar: function () {
        console.log(`${this.nome} andou!`);
    }
})

console.log(pessoa);
pessoa.andar();

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const carro = {
    rodas: 4,
    init(marca) {
        this.marca = marca;
        return this;
    },
    acelerar() {
        return this.marca + ' acelerou';
    },
    buzinar() {
        return this.marca + ' buzinou';
    }
}

const honda = Object.create(carro);
honda.init('Honda');

console.log(honda.acelerar()); // Honda acelerou

const ferrari = Object.create(carro).init('Ferrari');
console.log(ferrari.acelerar()); // Ferrari acelerou

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const funcaoAutomovel = {
    acelerar() {
        return 'acelerou';
    },
    buzinar() {
        return 'buzinou';
    },
}

const moto = {
    rodas: 2,
    capacete: true,
}

Object.assign(moto, funcaoAutomovel);

/* Os métodos e propriedades não vão pro protótipo do objeto, elas
vão direto para o objeto mesmo. Se existir uma propriedade com o
mesmo nome apartir do segundo argumento, ela vai substituir o valor
da atual (alvo). */