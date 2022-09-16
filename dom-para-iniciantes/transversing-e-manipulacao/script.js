// const h1 = document.querySelector('h1');
const animaisDescricao = document.querySelector('.animais-descricao');

// console.log(h1.innerHTML);
// console.log(h1.outerHTML);

// console.log(animaisDescricao.innerText);

/* ================================================================================= */

const animaisLista = document.querySelector('.animais-lista');

console.log(animaisLista.parentElement.parentElement); // body
console.log(animaisLista.previousElementSibling); // elemento acima
console.log(animaisLista.nextElementSibling); // elemento abaixo

console.log(animaisLista.children[--animaisLista.children.length]); // último filho
console.log(animaisLista.querySelector('li:first-child')); // primeira li

console.log(animaisLista.childNodes);

/* childNodes retorna tudo o que tem dentro de animais-lista,
incluindo espaços e comentários. */

/* ================================================================================= */

const animais = document.querySelector('.animais'),
    contato = document.querySelector('.contato'),
    titulo = contato.querySelector('.titulo'),
    mapa = document.querySelector('.mapa');

// animais.appendChild(titulo);
// contato.insertBefore(animais, mapa);
// contato.removeChild(titulo);
// contato.replaceChild(mapa, titulo);

/* ================================================================================= */

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Novo titulo';
novoH1.classList.add('titulo');

mapa.appendChild(novoH1);

/* ================================================================================= */

const h1 = document.querySelector('h1'),
    faq = document.querySelector('.faq');

const cloneH1 = h1.cloneNode(true);
cloneH1.classList.add('blue');

faq.appendChild(cloneH1);

/* modifica apenas o clone, e não o principal. */