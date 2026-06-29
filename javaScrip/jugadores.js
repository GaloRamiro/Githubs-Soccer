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

function renderizarAlbum(arregloAFiltrar = cromosMundial) {
  const album = document.getElementById("album");

  album.innerHTML = "";

  arregloAFiltrar.forEach((jugador) => {
    album.innerHTML += `
      <div class="card-cromo bloqueado" data-id="${jugador.id}" style="background-color: ${jugador.colorFondoHex}">
        <img src="${jugador.urlImagen}" alt="${jugador.nombre}" class="foto-jugador">
        <div class="contenido-cromo">
          <img src="${jugador.urlBandera}" class="bandera">
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

cromosMundial.push(
    crearJugador(
        1,
        "Jugador Demo",
        "Ecuador",
        "Delantero",
        "../imagenes/cromos/E1 William Pacho.jpg",
        "../Grupo_C/img/Maruecos.webp",
        "#F4C804",
        20,
        50,
        true,
        "Jugador de prueba"
    )
);

renderizarAlbum();

// ==========================
// FILTROS — José López
// feature/filtros-busqueda-album
// ==========================


function poblarSelectorPaises() {
  const select = document.getElementById("filtroPais");


  const paisesUnicos = [...new Set(cromosMundial.map((j) => j.pais))].sort();


  paisesUnicos.forEach((pais) => {
    const opcion = document.createElement("option");
    opcion.value = pais;
    opcion.textContent = pais;
    select.appendChild(opcion);
  });
}


function filtrarYMostrar() {
  const textoBuscado = document.getElementById("buscarJugador").value.toLowerCase();
  const paisSeleccionado = document.getElementById("filtroPais").value;


  const jugadoresFiltrados = cromosMundial.filter((jugador) => {
    const coincideNombre = jugador.nombre.toLowerCase().includes(textoBuscado);
    const coincidePais = paisSeleccionado === "" || jugador.pais === paisSeleccionado;
    return coincideNombre && coincidePais;
  });

  renderizarAlbum(jugadoresFiltrados);
}

document.getElementById("buscarJugador").addEventListener("input", filtrarYMostrar);
document.getElementById("filtroPais").addEventListener("change", filtrarYMostrar);


poblarSelectorPaises();