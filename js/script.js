// Selecciona todos los elementos con la clase "botones-contenido"
const $botonesContenido = document.querySelectorAll(".botones-contenido");

// Selecciona el modal
const $modal = document.querySelector("#modal-container");

// selecciona la imagen del contenedor
const $imagen = document.querySelector("#modal-container img");

// selecciona boton para cerrar modal
const $botonCerrar = document.querySelector("#boton-cerrar-modal");

// Agrega un controlador de evento clic a cada botón
$botonesContenido.forEach((boton) => {
  boton.addEventListener("click", (event) => {
    event.preventDefault();

    // Obtiene el valor del atributo "data-target" del botón
    const $imagenSeleccionada = event.target.dataset.target;

    // Actualiza la fuente de la imagen en el modal con la ruta correspondiente
    $imagen.src = `../img/ed${$imagenSeleccionada}/edificio-cocina-${$imagenSeleccionada}.jpg`;

    // Muestra el modal estableciendo el estilo "display" a "block"
    $modal.style.display = "block";
  });
});

// Agrega un controlador de evento clic al botón de cerrar modal
$botonCerrar.addEventListener("click", () => {
  // Oculta el modal estableciendo el estilo "display" a "none"
  $modal.style.display = "none";
});
