const menu = document.querySelector('.menu');

menu.classList.add('ativo');
menu.classList.remove('azul');

if (menu.classList.contains('azul')) {
    menu.classList.add('possui-azul');
}
else {
    menu.classList.add('nao-possui-azul');
}

menu.className = 'ativo teste azul';

// adicionar classes novas sem remover as anteriores:
menu.className = menu.className + ' vermelho';

// ou:
menu.className += ' amarelo';

/* tem que da espaço antes de adicionar uma nova classe,
conforme o exemplo acima. */

console.log(menu.className);

// console.log(menu.classList);

/* ================================================================================= */

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto']);

/* ================================================================================= */

const img = document.querySelector('img');
const srcImg = img.getAttribute('src');
const altImg = img.getAttribute('alt');

img.setAttribute('alt', 'É uma raposa');
const possuiAlt = img.hasAttribute('alt');

console.log(possuiAlt); // true
console.log(srcImg, altImg);

/* ================================================================================= */