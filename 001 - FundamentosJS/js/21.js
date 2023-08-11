// eventos de input
const escribiendo = (e) => {
    console.log(e.target.value);
}

const inputNombre = document.querySelector('.nombre');

inputNombre.addEventListener('input', escribiendo);
inputNombre.addEventListener('keydown', escribiendo);
inputNombre.addEventListener('keyup', escribiendo);
