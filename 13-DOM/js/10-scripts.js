const enlace = document.createElement('a');

// Agregando el texto
enlace.textContent = 'Nuevo enlaceeeee';

// Añadiendo atributos
enlace.href = '/nuevo-enlace';
enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.onclick = miFuncion;

// seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);

// seleccionar la navegacion entre vender y ayuda
console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion() {
    alert('Funcion');
}

// Añadir card
const parr1 = document.createElement('p');
parr1.textContent = 'Conciertooo';
parr1.classList.add('categoria', 'concierto');

const parr2 = document.createElement('p');
parr2.textContent = 'Concierto de rock';
parr2.classList.add('titulo');

const parr3 = document.createElement('p');
parr3.textContent = '$800 por persona';
parr3.classList.add('precio');

console.log(parr1);
console.log(parr2);
console.log(parr3);

