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
            } else {
                event.target.style.backgroundColor = "green";
                turno = 1;
            }

        }

        ganar();

        
    });




function jugadas(primera, segunda, tercera) {
    let ganar = false;

        if (primera !== "rgba(0, 0, 0, 0)" && primera !== "white" && 
            primera === segunda && segunda === tercera) {
    
            if (primera = "rgb(255,0,0)" && (segunda = "rgb(255,0,0)")
            && (tercera = "rgb(255,0,0)") && turno === 2) {
                
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

    jugadas(color0, color1, color2);
    jugadas(color3, color4, color5);
    jugadas(color6, color7, color8);
    jugadas(color0, color3, color6);
    jugadas(color1, color4, color7);
    jugadas(color2, color5, color8);
    jugadas(color0, color4, color8);
    jugadas(color2, color4, color6);
    
 

}

    

