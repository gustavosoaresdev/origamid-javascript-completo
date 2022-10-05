const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor);
    },
    ativar() {
        this.element().classList.add('ativo');
    }
}

Dom.ativar();
Dom.seletor = 'ul';
Dom.ativar();

/* ================================================================================= */