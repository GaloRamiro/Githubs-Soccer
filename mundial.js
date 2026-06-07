const video = document.getElementById("videoMundial");
const logo = document.getElementById("logoMundial");
const texto = document.querySelector(".texto-scroll");
const contenedor = document.querySelector(".contenedor-video");

video.addEventListener("loadedmetadata", () => {
  window.addEventListener("scroll", () => {
    const scrollMaximo = contenedor.offsetHeight - window.innerHeight;

    const scrollActual = Math.min(window.scrollY, scrollMaximo);

    const progreso = scrollActual / scrollMaximo;

    // Control del video
    video.currentTime = progreso * video.duration;

    // Escala del logo
    const escala = 1 - (progreso * 0.3);

    logo.style.transform = `scale(${escala})`;

    // Opacidad logo
    if(progreso < 0.8){

    logo.style.opacity = 1 - (progreso * 0.3);

}else{

    logo.style.opacity =
        1 - ((progreso - 0.8) * 5);

}

    // Opacidad texto
    texto.style.opacity =
    Math.max(0, 1 - (progreso * 0.8));
  });
});


// ---- COPIA ESTO AL FINAL DE TU MUNDIAL.JS ----

const tarjetaGrupoC = document.getElementById('tarjeta-grupo-c');

if (tarjetaGrupoC) {
    tarjetaGrupoC.addEventListener('click', function() {
        window.location.href = 'Grupo_C/paginas/grupoC.html';
    });
}

const tarjetaGrupoB = document.getElementById('tarjeta-grupo-b');

if (tarjetaGrupoB) {
    tarjetaGrupoB.addEventListener('click', function() {
        window.location.href = 'Grupo_B/paginas/grupoB.html';
    });
}