const animaisLista = document.querySelector('.animais-lista');
const totalHeight = animaisLista.scrollHeight;

console.log(totalHeight);

/* ================================================================================= */

const animaisTop = animaisLista.offsetTop;
console.log(animaisTop);

const firsth2 = document.querySelector('h2');
const firsth2Left = firsth2.offsetLeft;

console.log(firsth2Left);

/* ================================================================================= */

const rect = firsth2.getBoundingClientRect();
console.log(rect);

// retorna diversas propriedades de dimensões e distâncias...

rect.height;
rect.top;
rect.left;

/* ================================================================================= */

if (rect.top < 0) {
    console.log('Passou do elemento');
}

console.log(
    window.innerWidth,
    window.outerWidth,
    window.innerHeight,
    window.outerHeight,
    window.pageYOffset,
);

/* ================================================================================= */