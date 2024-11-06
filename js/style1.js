let section = document.querySelector(".section");
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
let caja9 = document.getElementById("caja9");
let caja10 = document.getElementById("caja10");
let caja11 = document.getElementById("caja11");
let caja12 = document.getElementById("caja12");
let caja13 = document.getElementById("caja13");
let caja14 = document.getElementById("caja14");
let caja15 = document.getElementById("caja15");
let caja = document.querySelectorAll(".caja");

let turno = 1;
otra.style.display = "none";

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

function jugadas(primera, segunda, tercera, cuarta) {
    let ganar = false;

    if (primera !== "" && primera === segunda && segunda === tercera && tercera === cuarta) {
        if (primera === "X" && turno === 2) {
            section.style.display = "none"; 
            volver1.style.display = "none";
            ganador.textContent = "HA GANADO EL JUGADOR DE X";
            ganar = true;
        } else if (primera === "O" && turno === 1) {
            section.style.display = "none"; 
            volver1.style.display = "none";
            ganador.textContent = "HA GANADO EL JUGADOR DE O";
            ganar = true;
        }

        ganador.style.display = "flex";

        if (ganar) {
            for (let i = 0; i < section.length; i++) {
                section[i].style.display = "none"; 
            }
            otra.style.display = "flex";
        }
        return;
    }
}

function ganar() {
    let color0 = caja0.textContent;
    let color1 = caja1.textContent;
    let color2 = caja2.textContent;
    let color3 = caja3.textContent;
    let color4 = caja4.textContent;
    let color5 = caja5.textContent;
    let color6 = caja6.textContent;
    let color7 = caja7.textContent;
    let color8 = caja8.textContent;
    let color9 = caja9.textContent;
    let color10 = caja10.textContent;
    let color11 = caja11.textContent;
    let color12 = caja12.textContent;
    let color13 = caja13.textContent;
    let color14 = caja14.textContent;
    let color15 = caja15.textContent;

    jugadas(color0, color1, color2, color3);
    jugadas(color4, color5, color6, color7);
    jugadas(color8, color9, color10, color11);
    jugadas(color12, color13, color14, color15);
    jugadas(color0, color4, color8, color12);
    jugadas(color1, color5, color9, color13);
    jugadas(color2, color6, color10, color14);
    jugadas(color3, color7, color11, color15);
    jugadas(color0, color5, color10, color15);
    jugadas(color3, color6, color9, color12);
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
