function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li'),
        tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });

            tabContent[index].classList.add('ativo');
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
    const accordionList = document.querySelectorAll('.js-accordion dt');
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