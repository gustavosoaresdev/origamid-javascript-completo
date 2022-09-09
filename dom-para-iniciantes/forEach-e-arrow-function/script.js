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

imgs.forEach((img, index, array) => {
    console.log(img, index, array);
});

/* ================================================================================= */