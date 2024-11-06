let section = document.getElementById("section");
let volver = document.getElementById("volver");
let volver1 = document.getElementById("volver1");
let ganador = document.getElementById("ganador");
let otra = document.getElementById("otra");

let caja0 = document.getElementById("caja0");
let caja1 = document.getElementById("caja1");
let caja2 = document.getElementById("caja2");
let caja3 = document.getElementById("caja3");
let caja4 = document.getElementById("caja4");
let caja5 = document.getElementById("caja5");
let caja6 = document.getElementById("caja6");
let caja7 = document.getElementById("caja7");
let caja8 = document.getElementById("caja8");
let caja = document.querySelectorAll(".caja");

let turno = 1;
otra.style.display = "none";
let partidas = 0;
let puntosX = 0;
let puntosY = 0;

    

for (let i = 0; i < caja.length; i++) {
    caja[i].addEventListener("click", (event) => {
        if (event.target.textContent !== "") {
            return;
        }

        if (turno === 1) {
            event.target.textContent = "X";
            event.target.classList.add("figurasX");
            turno = 2;
            
        } else {
            event.target.textContent = "O";
            event.target.classList.add("figurasO");
            turno = 1;
        }

        ganar();
        verificarEmpate();

        
    });
}

//funcion de ganar que comprueba las jugadas y si hay alguna correcta se gana.
function ganar() {
    let contenido0 = caja0.textContent;
    let contenido1 = caja1.textContent;
    let contenido2 = caja2.textContent;
    let contenido3 = caja3.textContent;
    let contenido4 = caja4.textContent;
    let contenido5 = caja5.textContent;
    let contenido6 = caja6.textContent;
    let contenido7 = caja7.textContent;
    let contenido8 = caja8.textContent;

    if (
        jugadas(contenido0, contenido1, contenido2) || 
        jugadas(contenido3, contenido4, contenido5) || 
        jugadas(contenido6, contenido7, contenido8) || 
        jugadas(contenido0, contenido3, contenido6) || 
        jugadas(contenido1, contenido4, contenido7) || 
        jugadas(contenido2, contenido5, contenido8) || 
        jugadas(contenido0, contenido4, contenido8) || 
        jugadas(contenido2, contenido4, contenido6)
    ) {
        return;
    }
}

function jugadas(primera, segunda, tercera) {
    let ganar = false;

    if (primera !== "" && primera === segunda && segunda === tercera) {
        if (primera === "X" && turno === 2) {
            section.style.display = "none";
            volver1.style.display = "none";
            ganador.textContent = "HA GANADO EL JUGADOR X";
            ganar = true;
            puntosX++;
            partidas++;
            console.log(puntosX++);
            console.log(partidas++);


        } else if (primera === "O" && turno === 1) {
            section.style.display = "none";
            volver1.style.display = "none";
            ganador.textContent = "HA GANADO EL JUGADOR O";
            ganar = true;
            puntosY++;
            partidas++;
            console.log(puntosY++);
            console.log(partidas++);

        }

        ganador.style.display = "flex";

        if (ganar) {
            otra.style.display = "flex";
        }
        return ganar;
    }
    return false;
}

function verificarEmpate() {
    let todasLlenas = true; 

    for (let i = 0; i < caja.length; i++) {
        if (caja[i].textContent === "") {
            todasLlenas = false;
            break;
        }
    }

    if (todasLlenas) {
            section.style.display = "none";
            volver1.style.display = "none";
            ganador.textContent = "¡Es un empate!";
            ganador.style.display = "flex";
            otra.style.display = "flex";
            
        }
    }

