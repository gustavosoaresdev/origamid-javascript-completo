const div = document.querySelector('[data-cor]');

div.dataset.height = 1000;
delete div.dataset.width;

div.dataset.totalHeight = 2000; // No DOM: data-total-height="2000"

console.log(div.dataset); // DOMStringMap {cor: 'azul', height: '1000'}