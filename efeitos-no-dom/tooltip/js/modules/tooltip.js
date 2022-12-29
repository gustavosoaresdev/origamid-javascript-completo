export default function initTooltip() {

}

const tooltips = document.querySelectorAll('[data-tooltip]');

tooltips.forEach((tooltip) => {
  tooltip.addEventListener('mouseover', onMouseOver);
})

function onMouseOver(event) {
  const tooltipBox = criarTooltipBox(this);
  console.log(event);
}

function criarTooltipBox(element) {
  const tooltipBox = document.createElement('div');
  const text = element.getAttribute('aria-label');
  tooltipBox.classList.add('tooltip');
  tooltipBox.innerText = text;
  document.body.appendChild(tooltipBox);

  return tooltipBox;
}