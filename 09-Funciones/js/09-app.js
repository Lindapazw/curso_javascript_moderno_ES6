const reproductor = {
    reproducir: id => console.log(`Reproducir la cancion con el id: ${id}`),
    pausar: function() {
        console.log(`Pausando...`);
    },
    borrar : function() {
        console.log('Borrando cancion ...');
    },
    crearPlayList : function(nombre) {
        console.log(`crear Play List ${nombre}`);
    },
    borrar : function() {
        console.log('Borrando cancion ...');
    },
    reproducirPlayList : function(nombre) {
        console.log(`Reproducioendo la playlist con el nombre: ${nombre}`);
    }
};
reproductor.reproducir(1);
reproductor.crearPlayList('Rock 90');
reproductor.reproducirPlayList('Rock 90');
