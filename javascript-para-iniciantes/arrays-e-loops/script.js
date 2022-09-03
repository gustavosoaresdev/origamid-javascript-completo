var videoGames = ['Switch', 'PS4', 'XBox'];
videoGames[2]; //  'XBox'

/* ================================================================================= */

var ultimoItem = videoGames.pop();  //  'XBox'

videoGames.push('3DS');
videoGames.length;  //  3
console.log(videoGames);    //  ['Switch', 'PS4', '3DS']

/* ================================================================================= */

for (var numero = 0; numero < 10; numero++) {
    console.log(numero);
}

for (var index = 0; index < videoGames.length; index++) {
    console.log(videoGames[index]);
    //  retorna todos os elementos da array videoGames
}

/* ================================================================================= */

var i = 0;
while (1 < 50) {
    console.log(i); //  de 0 a 49
    i++;
}

/* ================================================================================= */

var comidas = ['Arroz', 'Feijão', 'Carne', 'Salada'];

for (var i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);    //  ['Arroz', 'Feijão', 'Carne', 'Salada']
}

/* ================================================================================= */