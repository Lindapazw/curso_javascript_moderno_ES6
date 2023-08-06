const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('click', () => {
    console.log('click en navegacion');
});

// registrar un evento
nav.addEventListener('mouseenter', () => {
    console.log('entrando en navegacion');
});

// registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('saliendo en navegacion');
});
