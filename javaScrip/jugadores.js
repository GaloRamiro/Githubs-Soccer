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

// ============================================================
// FONDOS DINÁMICOS — CARLOS LÓPEZ
// feature/interfaz-fondos-dinamicos
// ============================================================

/**
 * Aplica de forma dinámica el color de fondo inline a cada tarjeta
 * basándose en la propiedad 'colorFondoHex' de cada objeto jugador.
 */
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

// ============================================================
// INTEGRACIÓN REACTIVA CON EL FLUJO DEL ÁLBUM
// ============================================================

// Guardamos una referencia de las funciones de renderizado y filtrado existentes
const renderizarOriginal = renderizarAlbum;
const filtrarOriginal = filtrarYMostrar;

// Interceptamos la función de renderizado original para que aplique tus fondos dinámicos automáticamente
renderizarAlbum = function (arregloAFiltrar = cromosMundial) {
  renderizarOriginal(arregloAFiltrar); // Ejecuta el renderizado base del equipo
  aplicarFondosDinamicos();            // Inyecta tu lógica estética de UI/UX
};

// Interceptamos la función de filtrado para asegurar que los fondos se mantengan al usar el buscador
filtrarYMostrar = function () {
  filtrarOriginal();                   // Ejecuta los filtros de José
  aplicarFondosDinamicos();            // Mantiene tus fondos estables tras el filtro
};

// Ejecutamos la función una primera vez para activar los fondos de los cromos iniciales
aplicarFondosDinamicos();