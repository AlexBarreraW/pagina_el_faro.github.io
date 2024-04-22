document.addEventListener("DOMContentLoaded", function() {
    // Función para obtener la fecha y la hora actual
    function obtenerFechaHora() {
        // Obtiene la fecha actual
        var fecha = new Date();

        // Formatea la fecha como DD/MM/AAAA
        var dia = fecha.getDate();
        var mes = fecha.getMonth() + 1;
        var año = fecha.getFullYear();
        var fechaFormateada = dia + '/' + mes + '/' + año;

        // Formatea la hora como HH:MM:SS
        var horas = fecha.getHours();
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        var horaFormateada = horas + ':' + minutos + ':' + segundos;

        // Actualiza el contenido del elemento span con el ID "hora-fecha"
        document.getElementById('hora-fecha').textContent = fechaFormateada + ' - ' + horaFormateada;
    }

    // Llama a la función obtenerFechaHora cada segundo para actualizar la fecha y la hora
    setInterval(obtenerFechaHora, 1000);

    // Llama a la función una vez al cargar la página para mostrar la fecha y la hora inicial
    obtenerFechaHora();

    // Función para agregar un artículo
    function agregarArticulo() {
        // Obtener los valores del formulario
        var titulo = document.getElementById("titulo-articulo").value;
        var descripcion = document.getElementById("descripcion-articulo").value;

        // Crear elementos HTML para el nuevo artículo
        var nuevoArticulo = document.createElement("div");
        nuevoArticulo.classList.add("column", "is-half");
        nuevoArticulo.innerHTML = `
            <h3 class="title is-3">${titulo}</h3>
            <p>Actualidad</p>
            <p class="contenido-noticia">${descripcion}</p>
        `;

        // Agregar el nuevo artículo al contenedor de artículos
        document.getElementById("contenedor-articulos").appendChild(nuevoArticulo);
    }

    // Función para actualizar el contador de artículos
    function actualizarContadorArticulos() {
        // Obtener la cantidad de artículos actuales
        var cantidadArticulos = document.querySelectorAll(".column.is-half").length;

        // Actualizar el texto del contador
        document.getElementById("contador-articulos").textContent = "Total de artículos: " + cantidadArticulos;
    }

    // Evento para agregar un artículo
    document.getElementById("boton-agregar-articulo").addEventListener("click", function() {
        agregarArticulo();
        actualizarContadorArticulos();
    });

    // Llamada inicial para actualizar el contador de artículos al cargar la página
    actualizarContadorArticulos();
});


// Función para determinar si el formulario de contacto debe mostrarse
function mostrarContacto() {
    var contacto = document.getElementById("contacto");
    var posicionScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    // Se muestra el formulario de contacto solo cuando se llega al final de la página
    if ((window.innerHeight + posicionScroll) >= document.body.offsetHeight - 50) {
        contacto.classList.remove("is-hidden");
    } else {
        contacto.classList.add("is-hidden");
    }
}

// Evento para controlar la visibilidad del formulario de contacto al hacer scroll
window.addEventListener("scroll", mostrarContacto);

// Evento para enviar el formulario de contacto
document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    // Aquí puedes agregar tu lógica de envío de mensaje, por ejemplo, enviarlo a un servidor

    // Mostrar mensaje de éxito
    document.getElementById("mensaje-enviado").style.display = "block";

    // Limpiar los campos del formulario después de unos segundos
    setTimeout(function() {
        document.getElementById("formulario-contacto").reset();
        document.getElementById("mensaje-enviado").style.display = "none";
    }, 3000); // 3000 milisegundos = 3 segundos
});


