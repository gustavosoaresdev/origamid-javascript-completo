const pessoa = new Object({
    nome: 'Gustavo',
    idade: 20,
    andar: function () {
        console.log(`${this.nome} andou!`);
    }
})

console.log(pessoa);
pessoa.andar();

/* ================================================================================= */