const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFunction);

function mostrarOcultarFunction() {
    if(footer.classList.contains('activo')) {
        footer.classList.remove('activo');
    } else {
        footer.classList.add('activo');
    }
}