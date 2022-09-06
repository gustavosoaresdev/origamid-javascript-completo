// window.alert('Hello World!');

const href = window.location.href;
console.log(href);

if (href === 'http://127.0.0.1:5500/dom-para-iniciantes/o-que-e-o-dom/index.html')
    console.log('Está na página certa');
else
    console.log('Está na página errada');

/* ================================================================================= */

const titulo = document.querySelector('h1');
titulo.innerText = 'Esse é o novo titulo...';

/* ================================================================================= */

titulo.classList;
// 0: 'titulo'
// 1: 'blue'
// length: 1
// value: 'titulo blue'

titulo.classList[0]; // 'titulo'
titulo.classList[1]; // 'blue'

const h1Classes = titulo.classList;

titulo.addEventListener('click', function () {
    console.log('Clicou em:', titulo.innerText);
});

// poderia ser assim também:
function callbackH1() {
    console.log('Clicou em:', titulo.innerText);
}

titulo.addEventListener('click', callbackH1);

/* dessa forma acima é mais recomendável */