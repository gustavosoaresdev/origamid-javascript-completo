// nomeie 3 propriedades ou métodos de strings
var nome = 'Gustabo';

nome.toUpperCase();
nome.charAt(3);
nome.replace('b', 'v');

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');

btn.classList.add('active');
btn.id;
btn.innerText;
btn.innerHTML;
btn.addEventListener('click', function () {
    console.log('Hello World!');
});

// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function copy() {
    var $textarea = document.querySelector('#textarea');
    $textarea.select();

    if ($textarea) {
        document.execCommand('copy');
        alert('Texto copiado');
    } else {
        alert('Erro: texto não copiado');
    }
}

var $btn = document.querySelector('#btn').addEventListener('click', copy);