function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

const gustavo = new Pessoa('Gustavo', 20);
console.log(Pessoa.prototype);
console.log(gustavo);

/* ================================================================================= */