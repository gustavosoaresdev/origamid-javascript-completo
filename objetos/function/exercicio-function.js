// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll('p');
const totalCaracteres = Array.prototype.reduce.call(paragrafos, (acc, item) => {
    return acc + item.innerText.length;
}, 0)

console.log(totalCaracteres); // 655

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function Dom(tag, classe, content) {
    const element = document.createElement(tag);
    classe ? element.classList.add(classe) : null;
    content ? element.innerText = content : null;

    return document.body.appendChild(element);
}

const newTag = new Dom('h1', 'titulo', 'Olá, mundo!');

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a classe
// titulo. Porém o parâmetro conteudo continuará dinâmico
const h1Titulo = Dom.bind(null, 'h1', 'titulo');

// Bônus: Criando Elementos
const cursosHTML = h1Titulo('Cursos de HTML');
const cursosCSS = h1Titulo('Cursos de CSS');
const cursosJS = h1Titulo('Cursos de JavaScript');