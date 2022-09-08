// Retorne no console todas as imagens do site
const todasImagens = document.querySelectorAll('img');
console.log(todasImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const palavraImagem = document.querySelectorAll('[src^="img/imagem"]');
console.log(palavraImagem);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// poderia ser assim também:

// const animaisDescricao = document.querySelector('.animais-descricao');
// const primeiroH2 = animais.querySelector('h2');

// Selecione o último p do site
const ultimoP = document.querySelectorAll('p');
console.log(ultimoP[ultimoP.length - 1]);

// poderia ser assim também:

console.log(ultimoP[--ultimoP.length]);

