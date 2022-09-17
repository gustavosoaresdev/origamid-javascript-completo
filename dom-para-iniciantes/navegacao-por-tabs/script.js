const tabMenu = document.querySelectorAll('.js-tabmenu li'),
    tabContent = document.querySelectorAll('.js-tabcontent section');

function activeTab(index) {
    tabContent.forEach((section) => {
        section.classList.remove('ativo');
    });

    tabContent[index].classList.add('ativo');
}