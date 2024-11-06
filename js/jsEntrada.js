const cargandoElemento = document.getElementById("cargando");

function iniciarCargando() {
  setTimeout(() => {
    location.href = "../index.html";
    console.log("hola");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", iniciarCargando);
