export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    /* esse método não funciona em todos os browsers,
    mas no Google Chrome e no Firefox funciona! */
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  linksInternos.forEach((linkInterno) => {
    linkInterno.addEventListener('click', scrollToSection);
  })
}