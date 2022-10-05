// const Dom = {
//     seletor: 'li',
//     element() {
//         return document.querySelector(this.seletor);
//     },
//     ativar() {
//         this.element().classList.add('ativo');
//     }
// }

function Dom() {
    this.seletor = 'li';
    this.element = function () {
        return document.querySelector(this.seletor);
    }
    this.ativar = function () {
        this.element().classList.add('ativo');
    }
}

const li = new Dom();
li.ativar();

const ul = new Dom();
ul.seletor = 'ul';
ul.ativar();