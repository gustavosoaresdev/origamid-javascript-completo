const h1 = document.querySelector('h1');
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
