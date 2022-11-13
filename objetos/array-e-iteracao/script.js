const carros = ['Ford', 'Fiat', 'Honda'];

carros.forEach((item, index, array) => {
    array[index] = 'Teste';
    console.log(item, index, array);

    // Ford 0 (3) ['Teste', 'Fiat', 'Honda']
    // Fiat 1 (3) ['Teste', 'Teste', 'Honda']
    // Honda 2 (3) ['Teste', 'Teste', 'Teste']
});

console.log('Array Original:', carros); // ['Teste', 'Teste', 'Teste']

// Geralmente usamos o forEach com Arrow Function.

/* Lembrando que o argumento (array) do forEach, é uma referência da
array original, portanto se você modificar a (array) dentro do
forEach, você estará modificando a array original também. */

console.log(''); // Apenas uma quebra de linha...

// Exemplo abaixo:
carros.forEach((item, index, array) => {
    console.log(item.toUpperCase(), index, array);

    // TESTE 0 (3) ['Teste', 'Teste', 'Teste']
    // TESTE 1 (3) ['Teste', 'Teste', 'Teste']
    // TESTE 2 (3) ['Teste', 'Teste', 'Teste']
});

console.log('Array Original:', carros); // ['Teste', 'Teste', 'Teste']

/* Nota que apenas o item ficou maiúsculo */

console.log(''); // Apenas uma quebra de linha...

carros.forEach((item, index, array) => {
    array[index] = array[index].toUpperCase();
    console.log(item, index, array);

    // Teste 0 (3) ['TESTE', 'Teste', 'Teste']
    // Teste 1 (3) ['TESTE', 'TESTE', 'Teste']
    // Teste 2 (3) ['TESTE', 'TESTE', 'TESTE']
});

console.log('Array Original:', carros); // ['TESTE', 'TESTE', 'TESTE']

/* Nota que agora que eu modifiquei os itens direto da (array) do
forEach, os itens da array original também foram modificados... */

/* ================================================================================= */

const li = document.querySelectorAll('li');

li.forEach((item) => item.classList.add('ativo'));

/* Eu particularmente prefiro usar os parênteses conforme acima.
Mas isso vai de gosto de cada pessoa... */

// Poderia ser assim também:
li.forEach(item => item.classList.add('ativo'));

// Ou assim:
li.forEach((item) => { item.classList.add('ativo') });

// Ou até mesmo do jeito mais "básico" que tem;
li.forEach((item) => {
    item.classList.add('ativo');
});

// E assim vai... depende de cada gosto pessoal

console.log(''); // Apenas uma quebra de linha...

/* ================================================================================= */

const retornoForeach = li.forEach((item, index) => {
    item.classList.add('ativo' + index);
});

console.log(retornoForeach); // undefined

/* O forEach() sempre retorna (undefined), porque o objetivo dele
não é o retorno do método, mas sim a iteração de cada (item)
que ele está fazendo. */

/* Essa mesma iteração pode ser feita com o map(), a diferença
é que o map() sempre vai retornar uma array. */

const carros2 = ['Ford', 'Fiat', 'Honda'];

const novaArray = carros2.map((item, index, array) => {
    console.log(item, index, array);
})

console.log(novaArray); // [undefined, undefined, undefined]

/* Ai você me pergunta, ué mais por que retornou uma array com
os valores undefined? */

/* Porque o valor dessa nova array, vai ser o valor do return de
cada iteração que tem, função sem return, o valor é undefined. */

const novaArray2 = carros2.map((item, index, array) => {
    return item;
})

console.log(novaArray2); // ['Ford', 'Fiat', 'Honda']

/* Lembrando que essa (novaArray2) é uma array nova, portanto ela
não tem nenhuma relação com a array original (carros2). */

// Demonstração:
novaArray2[0] = 'Teste';
console.log(novaArray2); // ['Teste', 'Fiat', 'Honda']

console.log(carros2); // ['Ford', 'Fiat', 'Honda']

/* Nota que a array (carros2) não foi modificada, porque a array
(novaArray2) é uma array totalmente nova. */

/* Não necessariamente devemos retornar apenas o item,
podemos retornar os itens modificados... */

// Ex:
const numeros = [2, 4, 5, 6, 78];
const numerosX2 = numeros.map((n) => n * 2);

console.log(numerosX2); // [4, 8, 10, 12, 156]

/* Isso vai depender do que você quer fazer com os itens... */

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const aulas = [
    {
        nome: 'HTML 1',
        min: 15,
    },
    {
        nome: 'HTML 2',
        min: 10,
    },
    {
        nome: 'CSS 1',
        min: 20,
    },
    {
        nome: 'JS 1',
        min: 25,
    },
]

// Vou fazer um calculo de minutos totais, usando apenas
// map() e forEach();

let soma = 0;
const tempoAulas = aulas.map(tempo => tempo.min);
tempoAulas.forEach(tempoTotal => soma += tempoTotal);

console.log(`Tempo total de aulas: ${soma} Min.`);
// Tempo total de aulas: 70 Min.

function nomeAulas(aula) {
    return aula.nome;
}

const arrayNomeAulas = aulas.map(nomeAulas);
console.log(arrayNomeAulas); // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const aulas2 = [10, 25, 30];
const reduceAulas = aulas2.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual;
}, 0);

console.log(reduceAulas); // 65

/* Se caso eu não usar um valor inícial para o acumulador, o valor
inícial de acumulador será o primeiro item da array. Que nesse caso
é 10. */

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const numeros2 = [10, 25, 30, 3, 54, 33, 22];

const maiorNumero = numeros2.reduce((anterior, atual) => {
    if (anterior > atual)
        return anterior;
    else
        return atual;
})

console.log(maiorNumero); // 54

// Lembrando que o argumento (anterior) é o (acumulador).

/* O reduce() não é apenas para calcular valores, pode ser usado para
outras coisas também. Neste exemplo acima, eu estou usando o reduce()
para retornar o maior número de uma array com números... */

// Eu poderia também usar o operador ternário;
const maiorNumero2 = numeros2.reduce((anterior, atual) => {
    return anterior > atual ? anterior : atual;
})

console.log(maiorNumero2); // 54

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const aulas3 = [
    {
        nome: 'HTML 1',
        min: 15,
    },
    {
        nome: 'HTML 2',
        min: 10,
    },
    {
        nome: 'CSS 1',
        min: 20,
    },
    {
        nome: 'JS 1',
        min: 25,
    },
]

const listaAulas = aulas3.reduce((acumulador, atual, index) => {
    acumulador[index] = atual.nome;
    return acumulador;
}, {})

console.log(listaAulas); // {0: 'HTML 1', 1: 'HTML 2', 2: 'CSS 1', 3: 'JS 1'}

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const frutas = ['Banana', 'Pêra', 'Uvas'];

const temUva = frutas.some((item) => {
    // console.log(item);
    return item === 'Uva';
})

console.log(temUva); // false

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const frutas2 = ['Banana', 'Pêra', 'Uva', 'Melancia', {}, 'Maça'];

const every = frutas2.every((fruta) => {
    return fruta;
})

console.log(every); // true

/* A diferença entre o some() e o every(), é que enquanto o some()
está procurando apenas um valor verdadeiro pra retornar verdadeiro,
o every() está procurando apenas um valor falso pra retornar falso. */

const idades = [6, 43, 22, 88, 101, 29];
const maior_ou_igual_a_18 = idades.every(n => n >= 18);

console.log(maior_ou_igual_a_18); // false

/* Neste exemplo acima, eu estou verificando se todas as "idades"
são maiores ou igual a 18. Neste caso o retorno será falso, porque
a uma idade na array que não é maior e nem igual a 18, (6) */

console.log('') // Apenas uma quebra de linha...

/* ================================================================================= */

const frutas3 = ['Banana', 'Pêra', 'Uva', 'Melancia', 'Maça'];
const indexMelancia = frutas3.findIndex(i => i === 'Melancia');

console.log('Index:', indexMelancia); // 3

// Meu objetivo aqui é encontrar e retornar a primeira pessoa
// que tiver a idade maior ou igual a 18;
const pessoas = [
    {
        nome: 'Gabriel',
        idade: 16,
    },
    {
        nome: 'Gustavo',
        idade: 20,
    },
    {
        nome: 'Marcio',
        idade: 30,
    },
    {
        nome: 'Jéssica',
        idade: 26,
    },
]

const encontrar = pessoas.find(pessoa => pessoa.idade >= 18);
console.log(encontrar); // {nome: 'Gustavo', idade: 20}