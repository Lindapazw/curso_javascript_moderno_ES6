const dinero = 200;
const tarjeta = 1000;
const totalApagar= 300;

// mayor
if ( dinero >= totalApagar ) {
    console.log('Puedes pagar');
} else if (tarjeta >= totalApagar ) {
    console.log('si puedo pagar porque tengo tarjeta de credito');
} else {
    console.log('No puedes pagar');
}