const video = document.getElementById("videoMundial");
const logo = document.getElementById("logoMundial");
const texto = document.querySelector(".texto-scroll");
const contenedor = document.querySelector(".contenedor-video");
const capaLogo = document.querySelector(".capa-logo");
window.addEventListener("load", () => {
    capaLogo.classList.add("visible");
    actualizarAnimacion();
});

function actualizarAnimacion() {

    const scrollMaximo = contenedor.offsetHeight - window.innerHeight;
    const scrollActual = Math.min(window.scrollY, scrollMaximo);

    const progreso = scrollMaximo > 0
        ? scrollActual / scrollMaximo
        : 0;

    // Actualizar video solo si ya cargó
    if (video.duration) {
        video.currentTime = progreso * video.duration;
    }

    logo.style.transform = `scale(${1 - progreso * 0.3})`;

    logo.style.opacity =
        progreso < 0.8
            ? 1 - progreso * 0.3
            : Math.max(0, 1 - ((progreso - 0.8) * 5));

    texto.style.opacity = Math.max(0, 1 - progreso * 0.8);

    // Ocultar completamente la capa al terminar
    if (progreso >= 0.95) {
        capaLogo.style.display = "none";
    } else {
        capaLogo.style.display = "flex";
    }
}

window.addEventListener("scroll", actualizarAnimacion);
window.addEventListener("load", actualizarAnimacion);

video.addEventListener("loadedmetadata", () => {
    actualizarAnimacion();
});

// =======================
// REDIRECCIÓN DE GRUPOS
// =======================

const tarjetaGrupoA = document.getElementById("tarjeta-grupo-a");

if (tarjetaGrupoA) {
  tarjetaGrupoA.addEventListener("click", function () {
    window.location.href = "Grupo_A/paginas/grupoA.html";
  });
}

const tarjetaGrupoB = document.getElementById("tarjeta-grupo-b");

if (tarjetaGrupoB) {
  tarjetaGrupoB.addEventListener("click", function () {
    window.location.href = "Grupo_B/paginas/grupoB.html";
  });
}

const tarjetaGrupoC = document.getElementById("tarjeta-grupo-c");

if (tarjetaGrupoC) {
  tarjetaGrupoC.addEventListener("click", function () {
    window.location.href = "Grupo_C/paginas/grupoC.html";
  });
}

const tarjetaGrupoD = document.getElementById("tarjeta-grupo-d");

if (tarjetaGrupoD) {
  tarjetaGrupoD.addEventListener("click", function () {
    window.location.href = "Grupo_D/paginas/grupoD.html";
  });
}

const tarjetaGrupoE = document.getElementById("tarjeta-grupo-e");

if (tarjetaGrupoE) {
  tarjetaGrupoE.addEventListener("click", function () {
    window.location.href = "Grupo_E/paginas/grupoE.html";
  });
}

const tarjetaGrupoF = document.getElementById("tarjeta-grupo-f");

if (tarjetaGrupoF) {
  tarjetaGrupoF.addEventListener("click", function () {
    window.location.href = "Grupo_F/paginas/grupoF.html";
  });
}
