const enlace = document.createElement('a');

// Agregando el texto
enlace.textContent = 'Nuevo enlaceeeee';

// Añadiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace);

// seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace);