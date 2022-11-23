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