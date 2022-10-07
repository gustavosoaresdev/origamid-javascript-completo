function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.abracar = function () {
        return 'Abraçou';
    }
    this.andar = function () {
        return 'Andou pelo objeto';
    }
}

Pessoa.prototype.andar = function () {
    return this.nome + ' andou';
}

const gustavo = new Pessoa('Gustavo', 20);
console.log(gustavo.andar()); // Andou pelo objeto

/* a resposta acima é "Andou pelo objeto" porquê quando executamos o
método (andar), ele primeiro verifica se possui esse método (andar) direto
na função, se tiver, ele executa, se não, ele vai executar o que estiver
no protótipo dela. */

/* mas se por algum motivo você precisar usar o método do protótipo
da função, basta você usar assim: */

// nomeDaFuncao.prototype.metodo();

/* ================================================================================= */

const pais = 'Brasil';
const cidade = new String('RS');

console.log(cidade.toUpperCase());

/* ================================================================================= */

const listaAnimais = ['Cachorro', 'Gato', 'Cavalo'];

const lista = document.querySelectorAll('li');
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

console.log(Object.getOwnPropertyNames(Pessoa.prototype));