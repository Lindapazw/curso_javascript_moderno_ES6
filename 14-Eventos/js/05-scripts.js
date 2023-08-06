// eventos con scroll
window.addEventListener("scroll", () => {
    const premium = document.querySelector(".premium");
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 785) {
        console.log('El elemento ya es visible.');
    } else {
        console.log('todavia falta');
    }
});