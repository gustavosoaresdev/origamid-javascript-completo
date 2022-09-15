const img = document.querySelector('img');

function callback(event) {
    console.log(event); // retorna diversas propriedades e métodos do evento
}

img.addEventListener('click', callback);

// lembrando que pode ser qualquer nome no parâmetro da função.

/* ================================================================================= */