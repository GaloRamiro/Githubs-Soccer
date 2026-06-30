// ============================================================================
// TRABAJO DEL ESTUDIANTE C - Desarrollador de Contenido Dinámico (Grupos C y D)
// Rama técnica obligatoria: feature/datos-dinamicos-grupo-cd
// ============================================================================

// 1. Inicialización y persistencia del estado global 'cromosMundial'
let datosLocales = localStorage.getItem("cromosMundial");
if (datosLocales) {
    window.cromosMundial = JSON.parse(datosLocales);
} else {
    window.cromosMundial = [];
}

// 2. Inyección de 1 jugador real por cada país de los Grupos C y D (IDs del 7 al 12)
const yaExistenMisJugadores = cromosMundial.some(j => j.id >= 7 && j.id <= 12);

if (!yaExistenMisJugadores) {
    cromosMundial.push(
        // ----------- GRUPO C -----------
        {
            id: 7,
            nombre: "Vinícius Júnior",
            pais: "Brasil",
            posicion: "Delantero",
            urlImagen: "imagenes/vinicius.jpg",
            urlBandera: "Grupo_C/img/Brazil.webp",
            colorFondoHex: "#cbde22",
            estadisticas: { goles: 5, partidos: 10 },
            destacado: true
        },
        {
            id: 8,
            nombre: "Achraf Hakimi",
            pais: "Marruecos", // Basado en tu archivo escocia.html orientado a Marruecos
            posicion: "Defensa",
            urlImagen: "imagenes/hakimi.jpg",
            urlBandera: "Grupo_C/img/Maruecos.webp",
            colorFondoHex: "#c1272d",
            estadisticas: { goles: 2, partidos: 12 },
            destacado: false
        },
        {
            id: 9,
            nombre: "Duckens Nazon",
            pais: "Haití",
            posicion: "Delantero",
            urlImagen: "imagenes/nazon.jpg",
            urlBandera: "Grupo_C/img/haiti.webp",
            colorFondoHex: "#002060",
            estadisticas: { goles: 4, partidos: 8 },
            destacado: false
        },
        // ----------- GRUPO D -----------
        {
            id: 10,
            nombre: "Christian Pulisic",
            pais: "Estados Unidos",
            posicion: "Centrocampista",
            urlImagen: "imagenes/pulisic.jpg",
            urlBandera: "Grupo_D/img/banderaUSA.png",
            colorFondoHex: "#002868",
            estadisticas: { goles: 6, partidos: 11 },
            destacado: true
        },
        {
            id: 11,
            nombre: "Miguel Almirón",
            pais: "Paraguay",
            posicion: "Delantero",
            urlImagen: "imagenes/almiron.png",
            urlBandera: "Grupo_D/img/banderaParaguay.png",
            colorFondoHex: "#d52b1e",
            estadisticas: { goles: 1, partidos: 9 },
            destacado: false
        },
        {
            id: 12,
            nombre: "Arda Güler",
            pais: "Turquía",
            posicion: "Centrocampista",
            urlImagen: "imagenes/guiler.png",
            urlBandera: "Grupo_D/img/banderaTurquia.png",
            colorFondoHex: "#e30a17",
            estadisticas: { goles: 3, partidos: 6 },
            destacado: true
        }
    );

    // Sincronizar con el almacenamiento del navegador
    localStorage.setItem("cromosMundial", JSON.stringify(cromosMundial));
}

// 3. Función obligatoria: Calcular total de goles e imprimir dinámicamente en el HTML
function inicializarModuloJugadores() {
    // Filtrar los 6 jugadores de este módulo
    const misJugadores = cromosMundial.filter(j => j.id >= 7 && j.id <= 12);
    
    // Operación aritmética acumuladora
    let totalGoles = 0;
    misJugadores.forEach(j => {
        totalGoles += j.estadisticas.goles;
    });

    // Imprimir dinámicamente el resultado en la sección del HTML correspondiente
    const marcadorHTML = document.getElementById("marcador-goles-cd");
    if (marcadorHTML) {
        marcadorHTML.innerHTML = `
            <p>
                ⚽ Total Goles Acumulados (Grupos C y D): 
                <span class="numero-goles">${totalGoles}</span>
            </p>
        `;
    }

    // 4. Renderizado automatizado de las tarjetas en el DOM
    const contenedorCromos = document.getElementById("contenedor-cromos");
    if (contenedorCromos) {
        contenedorCromos.innerHTML = ""; // Limpiar el contenedor antes de renderizar

        misJugadores.forEach(j => {
            const claseDestacado = j.destacado ? "cromo-destacado" : "";
            const insigniaCrack = j.destacado ? `<span class="insignia-top">⭐ CRACK</span>` : "";

            const tarjetaHTML = `
                <div class="cromo-card ${claseDestacado}" style="--color-pais: ${j.colorFondoHex}">
                    ${insigniaCrack}
                    
                    <div class="cromo-encabezado">
                        <img src="${j.urlBandera}" alt="Bandera" class="cromo-bandera" onerror="this.src='imagenes/LogoDev.svg'" />
                        <span class="cromo-pais-nombre">${j.pais}</span>
                    </div>

                    <div class="cromo-foto-wrapper">
                        <img src="${j.urlImagen}" alt="${j.nombre}" class="cromo-foto" onerror="this.src='imagenes/prueba.jpg'" />
                    </div>

                    <div class="cromo-info">
                        <h3 class="cromo-nombre">${j.nombre}</h3>
                        <p class="cromo-posicion">${j.posicion}</p>
                        
                        <div class="cromo-estadisticas">
                            <div class="stat-box">
                                <span class="stat-valor">${j.estadisticas.goles}</span>
                                <span class="stat-etiqueta">Goles</span>
                            </div>
                            <div class="stat-box">
                                <span class="stat-valor">${j.estadisticas.partidos}</span>
                                <span class="stat-etiqueta">Partidos</span>
                            </div>
                        </div>
                    </div>
                    <div class="cromo-id">#${j.id}</div>
                </div>
            `;
            contenedorCromos.innerHTML += tarjetaHTML;
        });
    }
}

// Ejecutar al cargar la estructura del documento
document.addEventListener("DOMContentLoaded", inicializarModuloJugadores);
