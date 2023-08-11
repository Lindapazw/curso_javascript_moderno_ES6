// manipular elementos
const heading = document.querySelector('.heading');
heading.textContent = 'Linda';

const input = document.querySelector('#formulario > input.submit');
console.log(input);
input.value = 'Linda';

// enlaces
const enlaces = document.querySelectorAll('.navegacion a');
enlaces.forEach( enlace => enlace.textContent = 'Linda');

