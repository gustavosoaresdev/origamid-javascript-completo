// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetosCursos = arrayCursos.map((curso) => {
    const titulo = curso.querySelector('h1').innerText,
        descricao = curso.querySelector('p').innerText,
        aulas = curso.querySelector('.aulas').innerText,
        horas = curso.querySelector('.horas').innerText;


    return {
        titulo,
        descricao,
        aulas,
        horas,
    };
})

console.log(objetosCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maioresQue100 = numeros.filter(n => n > 100);

console.log(maioresQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado'];
const possuiBaixo = instrumentos.some(i => i === 'Baixo');

console.log(possuiBaixo); // true

// Retorne o valor total das compras
const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99',
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99',
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49',
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35',
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60',
    },
]

const valorTotal = compras.reduce((acc, item) => {
    const valorLimpo = +item.preco.slice(3).replace(',', '.');
    return acc + valorLimpo;
}, 0)

// Bônus, usando toLocaleString
console.log(valorTotal.toLocaleString(
    'pt-BR', { style: 'currency', currency: 'BRL' }
)); // R$ 49,42