// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu'),
    copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq'),
    firstDT = faq.querySelector('dt');

console.log(firstDT);

// Selecione o DD referente ao primeiro DT
const dd = firstDT.nextElementSibling;
console.log(dd);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;