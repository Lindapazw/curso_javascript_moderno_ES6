const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', crearForm);

function crearForm (e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target.action);
    console.log(e.target.method);
}