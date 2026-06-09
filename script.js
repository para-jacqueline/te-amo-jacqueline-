console.log("Contador actualizado");
const fechaInicio = new Date("2026-04-08T00:00:00");

function actualizarContador(){

  const ahora = new Date();
  const diferencia = ahora - fechaInicio;

  const dias = Math.floor(diferencia/(1000*60*60*24));
  const horas = Math.floor((diferencia/(1000*60*60))%24);
  const minutos = Math.floor((diferencia/(1000*60))%60);
  const segundos = Math.floor((diferencia/1000)%60);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

actualizarContador();
setInterval(actualizarContador,1000);
function crearCorazon(){

  const corazon = document.createElement("div");

  corazon.classList.add("corazon");
  corazon.innerHTML = "❤️";

  corazon.style.left = Math.random() * 100 + "vw";

  corazon.style.fontSize =
    (Math.random() * 20 + 15) + "px";

  corazon.style.animationDuration =
    (Math.random() * 4 + 6) + "s";

  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 1000);
}

setInterval(crearCorazon, 150);
const circulos = document.querySelectorAll(".contador div");

circulos[0].style.setProperty(
  "--progreso",
  ((dias % 365) / 365) * 360 + "deg"
);

circulos[1].style.setProperty(
  "--progreso",
  (horas / 24) * 360 + "deg"
);

circulos[2].style.setProperty(
  "--progreso",
  (minutos / 60) * 360 + "deg"
);

circulos[3].style.setProperty(
  "--progreso",
  (segundos / 60) * 360 + "deg"
);
function crearCorazon() {

  const corazon = document.createElement("div");

  corazon.className = "corazon";
  corazon.innerHTML = "❤️";

  corazon.style.left = Math.random() * 100 + "vw";

  corazon.style.fontSize =
    (Math.random() * 25 + 15) + "px";

  corazon.style.animationDuration =
    (Math.random() * 5 + 5) + "s";

  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 10000);
}

setInterval(crearCorazon, 10000);
const audio = document.getElementById("audio");
const portada = document.querySelector(".album-cover");

audio.addEventListener("play", () => {
  portada.classList.add("playing");
});

audio.addEventListener("pause", () => {
  portada.classList.remove("playing");
});

audio.addEventListener("ended", () => {
  portada.classList.remove("playing");
});