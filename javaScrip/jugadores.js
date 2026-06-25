// ==========================
// ARREGLO GLOBAL
// ==========================

const cromosMundial = [];
function crearJugador(
  id,
  nombre,
  pais,
  posicion,
  urlImagen,
  urlBandera,
  colorFondoHex,
  goles,
  partidos,
  destacado,
  curiosidad,
) {
  return {
    id,
    nombre,
    pais,
    posicion,
    urlImagen,
    urlBandera,
    colorFondoHex,

    estadisticas: {
      goles,
      partidos,
    },

    destacado,
    curiosidad,
  };
}
function renderizarAlbum() {
  const album = document.getElementById("album");

  album.innerHTML = "";

  cromosMundial.forEach((jugador) => {
    album.innerHTML += `
            <div class="card-cromo">

                <img
                    src="${jugador.urlImagen}"
                    alt="${jugador.nombre}"
                    class="foto-jugador">

                <div class="contenido-cromo">

                    <img
                        src="${jugador.urlBandera}"
                        class="bandera">

                    <h2>${jugador.nombre}</h2>

                    <p>${jugador.pais}</p>

                    <p>${jugador.posicion}</p>

                    <p>⚽ ${jugador.estadisticas.goles}</p>

                    <p>🎮 ${jugador.estadisticas.partidos}</p>

                </div>

            </div>
        `;
  });
}
