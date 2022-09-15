// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLinks(event) {
    event.preventDefault();
    linksInternos.forEach((linkInterno) => {
        linkInterno.classList.remove('ativo');
    });

    event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((linkInterno) => {
    linkInterno.addEventListener('click', handleLinks);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
document.body.addEventListener('click', (event) => {
    console.log(event.target);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
document.body.addEventListener('click', (event) => {
    event.target.remove();
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function fontSize(event) {
    if (event.key === 't')
        document.documentElement.classList.toggle('fontSize');
}

window.addEventListener('keydown', fontSize);