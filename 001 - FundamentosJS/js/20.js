// eventos del DOM
const heading = document.querySelector('#heading');
heading.addEventListener('click', mensaje);

function mensaje(){
    console.log('Diste click en heading');
}

