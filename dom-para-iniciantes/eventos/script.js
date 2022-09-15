const img = document.querySelector('img');

function callback(event) {
    console.log(event); // retorna diversas propriedades e métodos do evento
}

// img.addEventListener('click', callback);

// lembrando que pode ser qualquer nome no parâmetro da função.

/* ================================================================================= */

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
}

animaisLista.addEventListener('click', callbackLista);

/* ================================================================================= */

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) {
    event.preventDefault();
    console.log(this);
    console.log(event.currentTarget);
    console.log(this.getAttribute('href'));
}

linkExterno.addEventListener('click', handleLinkExterno);

/* ================================================================================= */

const h1 = document.querySelector('h1');

function handleEvent(event) {
    console.log(event.type, event);
}

// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);
// window.addEventListener('keydown', handleEvent);
// window.addEventListener('keyup', handleEvent);

/* ================================================================================= */

function handleKeyboard(event) {
    if (event.key === 'b') {
        document.body.classList.toggle('blue');
        document.body.classList.remove('red');
    }

    else if (event.key === 'r') {
        document.body.classList.toggle('red');
        document.body.classList.remove('blue');
    }
}

window.addEventListener('keydown', handleKeyboard);

/* ================================================================================= */