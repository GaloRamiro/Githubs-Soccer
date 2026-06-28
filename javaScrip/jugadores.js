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

// 1. Poblar el select con los países que existen en el arreglo
function poblarSelectorPaises() {
  const select = document.getElementById("filtroPais");

  // Obtener lista de países únicos
  const paisesUnicos = [...new Set(cromosMundial.map((j) => j.pais))].sort();

  // Crear una <option> por cada país
  paisesUnicos.forEach((pais) => {
    const opcion = document.createElement("option");
    opcion.value = pais;
    opcion.textContent = pais;
    select.appendChild(opcion);
  });
}

// 2. Función que filtra y re-renderiza el álbum
function filtrarYMostrar() {
  const textoBuscado = document
    .getElementById("buscarJugador")
    .value.toLowerCase();
  const paisSeleccionado = document.getElementById("filtroPais").value;

  // Filtrar el arreglo según texto y/o país
  const jugadoresFiltrados = cromosMundial.filter((jugador) => {
    const coincideNombre = jugador.nombre.toLowerCase().includes(textoBuscado);
    const coincidePais =
      paisSeleccionado === "" || jugador.pais === paisSeleccionado;
    return coincideNombre && coincidePais;
  });

  // Re-pintar el álbum solo con los jugadores filtrados
  const album = document.getElementById("album");
  album.innerHTML = "";

  jugadoresFiltrados.forEach((jugador) => {
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

  // Mensaje si no hay resultados
  if (jugadoresFiltrados.length === 0) {
    album.innerHTML =
      "<p style='color:#ccc; text-align:center; grid-column:1/-1'>No se encontraron jugadores.</p>";
  }
}

// 3. Escuchar eventos en tiempo real
document
  .getElementById("buscarJugador")
  .addEventListener("input", filtrarYMostrar);
document
  .getElementById("filtroPais")
  .addEventListener("change", filtrarYMostrar);

// 4. Inicializar el selector de países al cargar la página
poblarSelectorPaises();