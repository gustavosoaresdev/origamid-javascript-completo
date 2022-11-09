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

/* ================================================================================= */