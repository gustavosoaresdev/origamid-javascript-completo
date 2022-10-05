// const Dom = {
//     seletor: 'li',
//     element() {
//         return document.querySelector(this.seletor);
//     },
//     ativar() {
//         this.element().classList.add('ativo');
//     }
// }

function Dom(seletor) {
    this.element = function () {
        return document.querySelector(seletor);
    }
    this.ativar = function (classe) {
        this.element().classList.add(classe);
    }
}

const li = new Dom('li');
li.ativar('ativoLI');

const ul = new Dom('ul');
ul.ativar('ativoUL');