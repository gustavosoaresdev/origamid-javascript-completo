// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop); // 360

// Retorne a soma da largura de todas as imagens
function somarLarguraDasImagens() {
    const imgs = document.querySelectorAll('img');

    let soma = 0;
    imgs.forEach((img) => {
        soma += img.offsetWidth;
    });

    console.log(soma); // 1992
}

window.onload = () => {
    somarLarguraDasImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach((link) => {
    const witdhLinks = link.offsetWidth,
        heightLinks = link.offsetHeight;

    if (witdhLinks >= 48 && heightLinks >= 48)
        console.log(link, 'Possui boa acessibilidade');

    else
        console.log(link, 'Não possui boa acessibilidade');
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const browser = window.matchMedia('(max-width: 720px)').matches;

if (browser) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
}