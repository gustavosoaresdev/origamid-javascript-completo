// const imgs = document.querySelectorAll('img');

// imgs.forEach(function (img, index, array) {
//     console.log(img, index, array);
// });

/* lembrando que pode ser qualquer nome nos parâmetros da função. */

/* ================================================================================= */

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

console.log(titulos); // retorna uma HTMLCollection
console.log(titulosArray); // retorna uma array normal

titulosArray.forEach(function (titulo, index, array) {
    console.log(titulo, index, array);
});

/* ================================================================================= */

const imgs = document.querySelectorAll('img');

imgs.forEach(img => console.log(img));

// se não colocar as chaves {}, não pode por ponto e virgula(;) no final.

// ex:
// imgs.forEach(img => console.log(img);); // vai apresentar um erro...

/* mais uma coisa, quando usamos apenas uma linha de código
conforme o exemplo acima, não precisamos colocar o return antes. */

/* ================================================================================= */