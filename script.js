document.addEventListener("DOMContentLoaded", function() {
    const botonContactenos = document.getElementById("boton-contactenos-final");
    const contacto = document.getElementById("contacto");

    // Alterna entre mostrar y ocultar el formulario al presionar el botón
    botonContactenos.addEventListener("click", function() {
        contacto.classList.toggle("is-hidden");
    });

    // Función para obtener la fecha y la hora actual con dos dígitos
    function obtenerFechaHora() {
        var fecha = new Date();

        var dia = String(fecha.getDate()).padStart(2, '0');
        var mes = String(fecha.getMonth() + 1).padStart(2, '0');
        var año = fecha.getFullYear();
        var fechaFormateada = `${dia}/${mes}/${año}`;

        var horas = String(fecha.getHours()).padStart(2, '0');
        var minutos = String(fecha.getMinutes()).padStart(2, '0');
        var segundos = String(fecha.getSeconds()).padStart(2, '0');
        var horaFormateada = `${horas}:${minutos}:${segundos}`;

        document.getElementById("hora-fecha").textContent = `${fechaFormateada} - ${horaFormateada}`;
    }

    // Llama a la función obtenerFechaHora cada segundo para mantener actualizado el tiempo
    setInterval(obtenerFechaHora, 1000);

    // Llama a la función una vez para la fecha y la hora inicial
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

    // Evento para agregar un artículo
    document.getElementById("boton-agregar-articulo").addEventListener("click", function() {
        agregarArticulo();
        actualizarContadorArticulos();
    });

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

// Oculta el mensaje de éxito después de unos segundos
            document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
                event.preventDefault(); // Evita el envío predeterminado del formulario
                const mensajeEnviado = document.getElementById("mensaje-enviado");

                // Simula el envío del formulario y muestra el mensaje de éxito
                mensajeEnviado.style.display = "block";

                // Oculta el mensaje de éxito después de 3 segundos
                setTimeout(function() {
                    mensajeEnviado.style.display = "none";
                    contacto.classList.add("is-hidden"); // Oculta el formulario nuevamente
                    document.getElementById("formulario-contacto").reset(); // Limpia el formulario
                }, 3000);
				
});


$(document).ready(function() {
    // Evento para abrir el modal cuando se hace clic en el botón con ID 'btn-horoscopo'
    $('#btn-horoscopo').on('click', function() {
        $('#modal-horoscopo').addClass('is-active'); // Abre el modal agregando la clase 'is-active'
    });

    // Evento para cerrar el modal al hacer clic en el fondo o en el botón de cierre
    $('.modal-background, .modal-close').on('click', function() {
        $('#modal-horoscopo').removeClass('is-active'); // Cierra el modal quitando la clase 'is-active'
    });
});