// eventos del DOM
const mensaje = () => {
    console.log('diste click');
}

const heading = document.querySelector('#heading');
heading.addEventListener('click', mensaje);


