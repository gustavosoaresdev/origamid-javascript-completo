export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]'),
    botaoFechar = document.querySelector('[data-modal="fechar"]'),
    containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {

    function abrirModal(event) {
      event.preventDefault();
      containerModal.classList.add('ativo');
    }

    function fecharModal(event) {
      event.preventDefault();
      containerModal.classList.remove('ativo');
    }

    function clickForaDoModal(event) {
      if (event.target === this)
        fecharModal(event);
    }

    botaoAbrir.addEventListener('click', abrirModal);
    botaoFechar.addEventListener('click', fecharModal);
    containerModal.addEventListener('click', clickForaDoModal);
  }
}