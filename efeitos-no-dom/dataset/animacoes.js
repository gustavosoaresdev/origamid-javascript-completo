function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li'),
    tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });

      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direcao);
    }

    tabMenu.forEach((li, index) => {
      li.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordionList() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  const activeClass = 'ativo';

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((dt) => {
      dt.addEventListener('click', activeAccordion);
    })
  }
}

initAccordionList();

function initScrollSuave() {
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

initScrollSuave();

function initAnimacaoScroll() {
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

initAnimacaoScroll();