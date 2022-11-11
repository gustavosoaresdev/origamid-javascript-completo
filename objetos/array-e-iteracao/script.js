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

/* ================================================================================= */