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

/* ================================================================================= */

const carro = {
    marca: 'Ford',
    preco: 2000,
    andar() {
        return true;
    }
}

/* carro.marca não é um objeto, é uma string. não importa o que vem antes
do (.) o que importa, é o que retorna por último! então você sempre terá
propriedades e métodos daquilo que retornar por último. se carro.marca
retornou uma string, então você terá propriedades e métodos de uma string,
e por ai vai... */

/* um exemplo, carro.andar() é uma função, quer dizer que ela possui
propriedades e métodos de uma função? NÂO! porquê o que está RETORNANDO
dentro dela, é um valor booleano! quando abrimos parênteses em uma função,
estamos executando ela, e ela vai retornar o que tem dentro dela, agora,
se não abrimos os parênteses ai sim ela terá propriedades e métodos de
uma função. */

/* NÂO IMPORTA O QUE A PROPRIEDADE OU MÉTODO SEJA, O QUE IMPORTA É O QUE
VAI RETORNAR DELA! SEMPRE!!! */