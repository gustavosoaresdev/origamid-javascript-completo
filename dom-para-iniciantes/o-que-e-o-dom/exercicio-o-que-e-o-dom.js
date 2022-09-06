// Retorne o url da página atual utilizando o objeto window
const href = location.href;
console.log(href);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const classAtivo = document.querySelector('.ativo');
// retorna apenas o primeiro elemento com a classe ativo.

// Retorne a linguagem do navegador
const linguagemNavegador = navigator.language; // 'pt-BR'
console.log(linguagemNavegador);

// bônus
if (linguagemNavegador === 'pt-BR') {
    console.log('Deixar o site em Português');
}
else if (linguagemNavegador === 'en-US') {
    console.log('Deixar o site em Inglês');
}
else {
    console.log('Outro idioma...');
}

// Retorne a largura da janela
const larguraJanela = window.innerWidth;
console.log(larguraJanela);