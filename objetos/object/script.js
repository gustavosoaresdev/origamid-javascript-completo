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

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const moto2 = {
    capacete: true
}

Object.defineProperties(moto2, {
    rodas: {
        get() {
            return this._rodas;
        },
        set(valor) {
            this._rodas = 'Total rodas: ' + valor * 2;
        }
    }
})

/* Não pode ter valor (value) quando utilizarmos (get e set).
Até porquê com o (get e set) nós estamos criando as propriedades... */

delete moto2.rodas;
/* Neste caso acima (delete moto2.rodas) não será deletado porquê
por padrão a propriedade (configurable) é false. Portanto não será
possível removela! */

moto2.rodas = 4;
console.log(moto2); // {capacete: true, rodas: 2}

/* Por padrão as propriedades (configurable), (writable) e (enumerable)
vem com o valor false, então nesse caso se eu quisesse deixar elas false
mesmo, eu não precisaria colocar elas no objeto, só se quiser deixar elas
com o valor true, ai é necessário usalas. */

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight');
console.log(innerHeightConfig.configurable); // true

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const carro2 = {
    marca: 'Fiat',
    ano: 2015,
}

console.log(Object.keys(carro2));
console.log(Object.values(carro2));
console.log(Object.entries(carro2));

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const array = [''];

// Isso
console.log(Object.getPrototypeOf(array));

// É a mesma coisa que isso;
console.log(Array.prototype);

// Poderia ser assim também;
console.log(Object.getPrototypeOf(['']));

// O resultado é o mesmo...

// Lembrando que esse método funciona para todos os tipos de dados.

// Ex:
console.log(Object.getPrototypeOf(20));
console.log(Number.prototype); // Mesma coisa......

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];
const frutaIgual = frutas1; // Referência a (frutas1)

console.log(Object.is(frutas1, frutas2)); // false
console.log(Object.is(frutas1, frutaIgual)); // true

/* (frutas1) e (frutas2) são "objetos diferentes", porquê se algum deles
for alterado/modificado, o outro não será impactado. */