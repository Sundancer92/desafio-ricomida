var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Seleccionando id del HTML como Variable
const btnCorreo = document.getElementById("enviarCorreo");

const dblIngredientes = document.getElementById("dblIngredientes");

const dblPreparacion = document.getElementById("dblPreparacion");

const cardReceta1 = document.getElementById("cardReceta1");
const cardReceta2 = document.getElementById("cardReceta2");
const cardReceta3 = document.getElementById("cardReceta3");

const tituloReceta1 = document.getElementById("tituloReceta1");
const tituloReceta2 = document.getElementById("tituloReceta2");
const tituloReceta3 = document.getElementById("tituloReceta3");

// Agregar evento a la variable creada
btnCorreo.addEventListener("click",function() {
    alert("El correo fue enviado correctamente...")
    
})

// Agregando estilo sobre evento dbclick
dblPreparacion.addEventListener("dblclick",function () {
    dblPreparacion.classList.add("dblRojo");
});

dblIngredientes.addEventListener("dblclick",function() {
    dblIngredientes.classList.add("dblRojo");
    
});

// Desapareciendo contenido

// Receta 1
tituloReceta1.addEventListener("click", function () {
    cardReceta1.classList.toggle("d-none")
})

// Receta 2
tituloReceta2.addEventListener("click", function () {
    cardReceta2.classList.toggle("d-none")
})

// Receta 3
tituloReceta3.addEventListener("click", function () {
    cardReceta3.classList.toggle("d-none")
})