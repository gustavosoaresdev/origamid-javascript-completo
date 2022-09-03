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

var videoGames2 = ['Switch', 'PS4', 'XBox', '3DS'];

for (var i = 0; i < videoGames2.length; i++) {
    console.log(videoGames2[i]);
    if (videoGames2[i] === 'PS4') {
        break;
    }
}

//  o retorno será: ['Switch', 'PS4']

/* ================================================================================= */

var frutas = ['Banana', 'Maça', 'Pêra', 'Abacaxi', 'Uva'];
frutas.forEach(function (item, index, array) {
    console.log(item, index, array);
});

//  o retorno será:

/*
    Banana 0 ['Banana', 'Maça', 'Pêra', 'Abacaxi', 'Uva']
    Maça 1 ['Banana', 'Maça', 'Pêra', 'Abacaxi', 'Uva']
    Pêra 2 ['Banana', 'Maça', 'Pêra', 'Abacaxi', 'Uva']
    Abacaxi 3 ['Banana', 'Maça', 'Pêra', 'Abacaxi', 'Uva']
    Uva 4 ['Banana', 'Maça', 'Pêra', 'Abacaxi', 'Uva']
*/

/* lembrando que não necessáriamente precisamos usar
os três argumentos, podemos usar só os que formos precisar...
o mais comum é o item, e pode botar qualquer nome também */

/* ================================================================================= */