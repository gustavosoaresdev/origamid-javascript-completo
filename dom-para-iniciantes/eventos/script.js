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