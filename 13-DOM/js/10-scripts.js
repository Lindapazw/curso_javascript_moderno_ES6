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