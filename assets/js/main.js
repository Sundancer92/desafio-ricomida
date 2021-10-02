
// Se definen las constantes
    //Enviar Correo
const botonEnviar = document.getElementById("enviarCorreo");

    // Titulos a Rojo
const tituloIngredientes = document.getElementById("tituloIngredientes");
const tituloPreparacion = document.getElementById("tituloPreparacion");

    // Titulos Cards
const tituloReceta1 = document.getElementById("tituloReceta1");
const tituloReceta2 = document.getElementById("tituloReceta2");
const tituloReceta3 = document.getElementById("tituloReceta3");

// Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Se definen los Event Listener
    // Enviar Correo
botonEnviar.addEventListener("click",function(){
    alert("El correo fue enviado correctamente..");
});
    // Presiona para enviar correo
botonEnviar.addEventListener("data-toogle", function () {   
})

    // Cambiar titulos a color Rojo
        // INGREDIENTES
tituloIngredientes.addEventListener("dblclick",function() {
   tituloIngredientes.classList.add('dblRojo') 
});
        // Preparacion
tituloPreparacion.addEventListener("dblclick",function() {
   tituloPreparacion.classList.add('dblRojo') 
});

    //Desaparecer descripcion de cards
        // Card 1
tituloReceta1.addEventListener("click", function () {
    toggleObjective1.classList.toggle('d-none');
    toggleObjective2.classList.toggle('d-none');
    toggleObjective3.classList.toggle('d-none');
});
        // Card 2
tituloReceta2.addEventListener("click", function () {
    toggleObjective1.classList.toggle('d-none');
    toggleObjective2.classList.toggle('d-none');
    toggleObjective3.classList.toggle('d-none');
});
        // Card 3
tituloReceta3.addEventListener("click", function () {
    toggleObjective1.classList.toggle('d-none');
    toggleObjective2.classList.toggle('d-none');
    toggleObjective3.classList.toggle('d-none');
});

