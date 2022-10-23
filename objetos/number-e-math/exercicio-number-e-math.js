// Retorne um número aleatório
// entre 1050 e 2000
const randomNumber = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(randomNumber);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(', ');
const maiorNumero = Math.max(...arrayNumeros);

console.log(maiorNumero);

/* Agente ainda não aprendeu sobre esses 3 pontinhos,
mas o nome disso é (spread perator) */

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230 ', 'r$ 200'];

function limparPreco(preco) {
    preco = +preco.toUpperCase().slice(3).trim().replace(',', '.');
    preco = +preco.toFixed(2);

    return preco;
}

let soma = 0;
listaPrecos.forEach((preco) => {
    soma += limparPreco(preco);
});

console.log(soma.toLocaleString(
    'pt-BR', { style: 'currency', currency: 'BRL' }
));

/* Confesso que esse último foi um pouco difícil kkk */