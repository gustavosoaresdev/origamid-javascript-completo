export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;

        if (isSectionVisible) {
          section.classList.add('ativo');
        }

        /* se quiser que a animação volta a ocorrer quando o usuário
        voltar para cima, basta colocar um (else) e remover a classe (ativo). */

        // desse jeito:

        // else {
        //     section.classList.remove('ativo');
        // }

        // no meu caso, eu não vou querer.
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}