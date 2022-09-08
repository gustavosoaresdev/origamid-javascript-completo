const animais = document.getElementById('animais');
console.log(animais);

/* ================================================================================= */

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]);

/* mesma coisa com o getElementsByTagName... */

/* ================================================================================= */

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

/* tem métodos e propriedades que podemos utilizar nos elementos também... */

/* ================================================================================= */

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);
console.log(animaisImg[2]); //  lembrando que é sempre base 0

/* aqui é diferente, ele retorna uma NodeList, que parece uma Array mas não é
ele também é diferente do HTMLCollection, o NodeList possui alguns métodos e
propriedades que o HTMLCollection não possui */

/* ================================================================================= */

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNodeList = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');   //  só pra testar...

console.log(gridSectionHTML[0]);
console.log(gridSectionNodeList[0]);

/* ================================================================================= */

gridSectionNodeList.forEach(function (item, index) {
    console.log(item);
});

const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid);

/* gridSectionHTML é uma array agora, contendo métodos e propriedades de uma array... */

arrayGrid.forEach(function (item) {
    console.log(item);
});