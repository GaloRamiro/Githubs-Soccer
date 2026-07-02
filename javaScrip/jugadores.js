// ==========================================
// ARREGLO GLOBAL Y MODELADO DE DATOS
// ==========================================

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

// 1. Registro del Jugador Demo Inicial (Removido el duplicado para evitar conflictos de ID)

// ==========================
// Desarrollador de Contenido Dinámico - Grupo A y B — Carlos Chávez
// feature/datos-dinamicos-grupo-ab
// ==========================

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
    3,
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
    4,
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
    5,
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
    6,
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

// 2. TRABAJO DE EVELYN: Nuevos Países (IDs obligatorios del 7 al 12)
cromosMundial.push(
  crearJugador(
    7,
    "Lionel Messi",
    "Argentina",
    "Delantero",
    "../imagenes/cromos/messi.jpg",
    "../imagenes/cromos/Argentina.jpg",
    "#2c3e50",
    12,
    15,
    true,
    "Capitán histórico",
  ),
  crearJugador(
    8,
    "Santiago Giménez",
    "México",
    "Delantero",
    "../imagenes/cromos/gimenes.jpg",
    "../Grupo_A/img/banderaMexico.png",
    "#1f5222",
    4,
    10,
    false,
    "Goleador en Europa",
  ),
  crearJugador(
    9,
    "Kylian Mbappé",
    "Francia",
    "Delantero",
    "../imagenes/cromos/mbappe.jpg",
    "../imagenes/cromos/francia.jpg",
    "#0d47a1",
    9,
    12,
    true,
    "Velocidad pura",
  ),
  crearJugador(
    10,
    "Christian Eriksen",
    "Dinamarca",
    "Centrocampista",
    "../imagenes/cromos/eriksen.jpg",
    "../imagenes/cromos/dinamarca.jpg",
    "#462d2d",
    2,
    11,
    false,
    "Líder del mediocampo",
  ),
  crearJugador(
    11,
    "Robert Lewandowski",
    "Polonia",
    "Delantero",
    "../imagenes/cromos/lewandowski.jpg",
    "../imagenes/cromos/polonia.png",
    "#2c336d",
    6,
    9,
    true,
    "Goleador histórico polaco",
  ),
  crearJugador(
    12,
    "Jackson Irvine",
    "Australia",
    "Centrocampista",
    "../imagenes/cromos/irvine.jpg",
    "../imagenes/cromos/astralia.jpg",
    "#f57f17",
    3,
    8,
    false,
    "Referente de los Socceroos",
  ),
);

// ==========================================
// RENDERIZADO DEL ÁLBUM VIRTUAL 
// ==========================================

function renderizarAlbum(arregloAFiltrar = cromosMundial) {
  const album = document.getElementById("album");
  album.innerHTML = "";

  arregloAFiltrar.forEach((jugador) => {
    album.innerHTML += `
      <div class="card-cromo bloqueado" data-id="${jugador.id}">
        <img src="${jugador.urlImagen}" alt="${jugador.nombre}" class="foto-jugador" onerror="this.src='../imagenes/LogoDev.svg'">
        <div class="contenido-cromo">
          <img src="${jugador.urlBandera}" class="bandera" onerror="this.src='../imagenes/LogoDev.svg'">
          <h2>${jugador.nombre}</h2>
          <p>📍 ${jugador.pais}</p>
          <p>🏃‍♂️ ${jugador.posicion}</p>
          <p>⚽ Goles: ${jugador.estadisticas.goles}</p>
          <p>🎮 Partidos: ${jugador.estadisticas.partidos}</p>
        </div>
      </div>
    `;
  });

  aplicarFondosDinamicos();
}

// ============================================================
// FONDOS DINÁMICOS — CARLOS LÓPEZ 
// feature/interfaz-fondos-dinamicos
// ============================================================

function aplicarFondosDinamicos() {
  // 1. Capturamos todas las tarjetas que se encuentran actualmente en el HTML
  const tarjetas = document.querySelectorAll(".card-cromo");

  tarjetas.forEach((tarjeta) => {
    // 2. Obtenemos el ID de la tarjeta desde el atributo 'data-id'
    const jugadorId = parseInt(tarjeta.getAttribute("data-id"));

    // 3. Buscamos al objeto jugador correspondiente en nuestro arreglo global
    const jugador = cromosMundial.find((j) => j.id === jugadorId);

    // 4. Si el jugador existe y tiene un color definido, aplicamos el estilo inline de forma segura
    if (jugador && jugador.colorFondoHex) {
      tarjeta.style.backgroundColor = jugador.colorFondoHex;
    }
  });
}

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

// ============================================================
// TOTAL GOLES DINÁMICOS - Estudiante C
// ============================================================

function calcularTotalGoles() {
  let acumuladorGoles = 0;

  cromosMundial.forEach((jugador) => {
    acumuladorGoles += jugador.estadisticas.goles;
  });

  const contenedorGoles = document.getElementById("totalGoles");
  if (contenedorGoles) {
    contenedorGoles.textContent = acumuladorGoles;
  }
}

// ==============================================================
// FLUJO CONTROLADO POR DOMContentLoaded. Modificación solicitada
// ==============================================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Primer renderizado completo del álbum / activación de fondos iniciales
  renderizarAlbum();

  // 2. Carga segura del selector de países (incluye nuevos países)
  poblarSelectorPaises();

  // 3. Ejecución de tu cálculo matemático de goles
  calcularTotalGoles();
  
  // 4. Escuchadores de eventos reactivos para los filtros de búsqueda
  document.getElementById("buscarJugador").addEventListener("input", filtrarYMostrar);
  document.getElementById("filtroPais").addEventListener("change", filtrarYMostrar);
});
