let section = document.getElementsByClassName("section");
let volver = document.getElementById("volver");
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





let turno = 1;
otra.style.display = "none";

for (let i = 0; i < section.length; i++) {

    section[i].addEventListener("click", (event) => {
        
        if (event.target.nodeName === "DIV") {
            if (event.target.style.backgroundColor !== "" && event.target.style.backgroundColor !== "white") {
                return;
            }
            if (turno === 1) {
                event.target.style.backgroundColor = "red";
                turno = 2;
            } else if (turno === 2) {
                event.target.style.backgroundColor = "green";
                turno = 1;
            }
        }

        ganar()


    });




function jugadas(primera, segunda, tercera, cuarta) {
    let ganar = false;

    if (primera !== "rgba(0, 0, 0, 0)" && primera !== "white" && 
            primera === segunda && segunda === tercera && tercera === cuarta) {
    
            if (primera = "rgb(255,0,0)" && (segunda = "rgb(255,0,0)") && (tercera = "rgb(255,0,0)") && (cuarta = "rgb(255,0,0)") && turno === 2) {
                
                ganador.textContent = "HA GANADO EL JUGADOR DE ROJO";
                ganar = true;

            }else if(primera = "rgb(0,128,0)" && (segunda = "rgb(0,128,0)")
                && (tercera = "rgb(0,128,0)") && turno === 1){
                
                ganador.textContent = "HA GANADO EL JUGADOR DE VERDE";
                ganar = true;

            }

            ganador.style.display = "flex";  
    
            if (ganar === true) {
                for (let i = 0; i < section.length; i++) {
                    section[i].style.display = "none";
                    otra.style.display = "flex";

                }
        }
            return;
        }

    }
}


function ganar(){

    let color0 = getComputedStyle(caja0).backgroundColor;
    let color1 = getComputedStyle(caja1).backgroundColor;
    let color2 = getComputedStyle(caja2).backgroundColor;
    let color3 = getComputedStyle(caja3).backgroundColor;
    let color4 = getComputedStyle(caja4).backgroundColor;
    let color5 = getComputedStyle(caja5).backgroundColor;
    let color6 = getComputedStyle(caja6).backgroundColor;
    let color7 = getComputedStyle(caja7).backgroundColor;
    let color8 = getComputedStyle(caja8).backgroundColor;
    let color9 = getComputedStyle(caja9).backgroundColor;
    let color10 = getComputedStyle(caja10).backgroundColor;
    let color11 = getComputedStyle(caja11).backgroundColor;
    let color12 = getComputedStyle(caja12).backgroundColor;
    let color13 = getComputedStyle(caja13).backgroundColor;
    let color14 = getComputedStyle(caja14).backgroundColor;
    let color15 = getComputedStyle(caja15).backgroundColor;


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

