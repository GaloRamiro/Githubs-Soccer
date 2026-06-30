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

// ==========================
// Desarrollador de Contenido Dinámico - Grupo A y B — Carlos Chávez
// feature/datos-dinamicos-grupo-ab
// ==========================

// cromosMundial.push(
//   crearJugador(
//     1,
//     "Jugador Demo",
//     "Ecuador",
//     "Defensa",
//     "../imagenes/cromos/E1 William Pacho.jpg",
//     "../Grupo_E/img/Ecuador.png",
//     "#F4C804",
//     20,
//     50,
//     true,
//     "PSG"
//   )
// );

cromosMundial.push(
  crearJugador(
    1,
    "Álvaro Fidalgo",
    "México",
    "Mediocampista",
    "../imagenes/cromos/FIDALGO-Alvaro.png",
    "../Grupo_A/img/banderaMexico.png",
    "#00A859",
    8,
    0,
    false,
    "Club América"
  )
);

cromosMundial.push(
  crearJugador(
    2,
    "Orbelín Pineda",
    "México",
    "Mediocampista",
    "../imagenes/cromos/PINEDA-Orbelin.png",
    "../Grupo_A/img/banderaMexico.png",
    "#00A859",
    17,
    0,
    true,
    "AEK Atenas"
  )
);

cromosMundial.push(
  crearJugador(
    3,
    "Ronwen Williams",
    "Sudáfrica",
    "Portero",
    "../imagenes/cromos/WILLIAMS-Ronwen.png",
    "../Grupo_A/img/banderaSudafrica.png",
    "#007847",
    1,
    0,
    false,
    "Mamelodi Sundowns"
  )
);

cromosMundial.push(
  crearJugador(
    4,
    "Lyle Foster",
    "Sudáfrica",
    "Delantero",
    "../imagenes/cromos/Lyle FOSTER.png",
    "../Grupo_A/img/banderaSudafrica.png",
    "#007847",
    9,
    0,
    false,
    "Burnley FC"
  )
);

cromosMundial.push(
  crearJugador(
    5,
    "Son Heung-min",
    "Corea del Sur",
    "Delantero",
    "../imagenes/cromos/SON-Heungmin.png",
    "../Grupo_A/img/banderaCorea.png",
    "#CD2E3A",
    7,
    0,
    true,
    "Tottenham Hotspur"
  )
);

cromosMundial.push(
  crearJugador(
    6,
    "Patrik Schick",
    "República Checa",
    "Delantero",
    "../imagenes/cromos/Patrik Schick.png",
    "../Grupo_A/img/banderaCheca.png",
    "#D7141A",
    10,
    0,
    true,
    "Bayer Leverkusen"
  )
);

cromosMundial.push(
  crearJugador(
    7,
    "Jonathan David",
    "Canadá",
    "Delantero",
    "../imagenes/cromos/DAVID-Jonathan.png",
    "../Grupo_B/img/canada.png",
    "#FF0000",
    10,
    3,
    true,
    "LOSC Lille"
  )
);

cromosMundial.push(
  crearJugador(
    8,
    "Johan Manzambi",
    "Suiza",
    "Defensa",
    "../imagenes/cromos/MANZAMBI-Johan.png",
    "../Grupo_B/img/suiza.png",
    "#FF0000",
    9,
    3,
    false,
    "Joven talento"
  )
);

cromosMundial.push(
  crearJugador(
    9,
    "Rubén Vargas",
    "Suiza",
    "Extremo",
    "../imagenes/cromos/VARGAS-Ruben.png",
    "../Grupo_B/img/suiza.png",
    "#FF0000",
    17,
    2,
    true,
    "FC Augsburg"
  )
);

cromosMundial.push(
  crearJugador(
    10,
    "Ermin Mahmic",
    "Bosnia",
    "Defensa",
    "../imagenes/cromos/MAHMIC-Ermin.png",
    "../Grupo_B/img/bosnia.png",
    "#0052B4",
    26,
    2,
    false,
    "Jugador defensivo"
  )
);

cromosMundial.push(
  crearJugador(
    11,
    "Jovo Lukic",
    "Bosnia",
    "Delantero",
    "../imagenes/cromos/LUKIC-Jovo.png",
    "../Grupo_B/img/bosnia.png",
    "#0052B4",
    25,
    1,
    false,
    "FK Borac"
  )
);

cromosMundial.push(
  crearJugador(
    12,
    "Assim Madibo",
    "Qatar",
    "Mediocampista",
    "../imagenes/cromos/ASSIM-MADIBO.png",
    "../Grupo_B/img/catar.png",
    "#8A1538",
    23,
    1,
    false,
    "Selección de Qatar"
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