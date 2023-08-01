const usuario = false;
const puedoPagar = false;

if (usuario && puedoPagar) { 
    console.log('Eres usuario y puedes pagar');
} else if(!usuario && !puedoPagar) {
    console.log('no puedes comprar. no tienes usuario ni dinero');
} else if(!usuario) {
    console.log('inicia secion o saca una cuenta');
} else if(!puedoPagar) {
    console.log('no puedes pagar');
}