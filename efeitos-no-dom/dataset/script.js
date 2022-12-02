const div = document.querySelector('[data-cor]');

div.dataset.height = 1000;
delete div.dataset.width;

console.log(div.dataset); // DOMStringMap {cor: 'azul', height: '1000'}