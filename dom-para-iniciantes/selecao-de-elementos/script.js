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