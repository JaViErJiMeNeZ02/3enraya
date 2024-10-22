const emoticonos = [
  "fas fa-smile",    
  "fas fa-heart",    
  "fas fa-sun",     
  "fas fa-thumbs-up",
  "fas fa-coffee",  
  "fas fa-star",  
  "fas fa-bell",     
  "fas fa-moon",     
  "fas fa-cloud",    
  "fas fa-globe",   
  "fas fa-user",     
  "fas fa-phone",    
  "fas fa-laugh",    
  "fas fa-paw",     
  "fas fa-gift",     
  "fas fa-cogs"     
];

const colores = [
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Magenta",
  "Cyan",
  "Orange",
  "Purple",
  "DarkGreen",
  "Black",
  "White",
  "Brown",
  "Lime",
  "Chocolate",
  "Aqua",
  "Crimson"
];

let boton__emoticonos = document.getElementById("boton__emoticonos");
let boton__colores = document.getElementById("boton__colores");
let boton_tres_en_raya = document.getElementById("boton_tres_en_raya");
let boton_cuatro_en_raya = document.getElementById("boton_tres_en_raya")

let emoticonoSeleccionado = "";
let colorSeleccionado = "";

let elegirEmoticonos = (event) => {
  event.preventDefault();

  boton__emoticonos.classList.add("activo");
  boton__colores.classList.remove("activo");

  let pos = Math.floor(Math.random() * emoticonos.length);
  let pos1 = Math.floor(Math.random() * emoticonos.length);
  if (pos === pos1) {
    pos1 = (pos1 + 1); 
  }

  emoticonoSeleccionado = `${emoticonos[pos]}, ${emoticonos[pos1]}`; 
};

let elegirColores = (event) => {
  event.preventDefault();

  boton__colores.classList.add("activo");
  boton__emoticonos.classList.remove("activo");

  let pos = Math.floor(Math.random() * colores.length);
  let pos1 = Math.floor(Math.random() * colores.length);
  if (pos === pos1) {
    pos1 = (pos1 + 1); 
  }

  colorSeleccionado = `${colores[pos]}, ${colores[pos1]}`;
};

boton__emoticonos.addEventListener("click", elegirEmoticonos);
boton__colores.addEventListener("click", elegirColores);

boton_tres_en_raya.addEventListener("click", () => {
  console.log("Seleccionado para TRES EN RAYA:", emoticonoSeleccionado || colorSeleccionado);
});

boton_cuatro_en_raya.addEventListener("click", () => {
  console.log("Seleccionado para CUATRO EN RAYA:", emoticonoSeleccionado || colorSeleccionado);
});
