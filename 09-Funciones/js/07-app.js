iniciarApp();

function iniciarApp() {
    console.log('iniciando app ...');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda ...');
    autenticacion('Pablo');
}

function autenticacion(usuario) {
    console.log('Autenticando ...');
    console.log(`El usuario es: ${usuario}`);
}