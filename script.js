document.addEventListener("DOMContentLoaded", function() {
    // Función para mostrar fecha y hora en tiempo real
    function mostrarFechaHora() {
        const ahora = new Date();
        const fechaHora = ahora.toLocaleString("es-ES", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric"
        });
        document.getElementById("fecha-hora").textContent = fechaHora;
    }

    // Función para agregar un artículo
    function agregarArticulo() {
        const titulo = document.getElementById("titulo-articulo").value;
        const descripcion = document.getElementById("descripcion-articulo").value;
        const articuloHTML = `
            <div>
                <h3>${titulo}</h3>
                <p>${descripcion}</p>
            </div>
        `;
        document.getElementById("contenedor-articulos").innerHTML += articuloHTML;
    }

    // Función para enviar el formulario de contacto
    function enviarMensaje() {
        const nombre = document.getElementById("nombre").value;
        const mensaje = document.getElementById("mensaje").value;
        // Aquí podrías agregar la lógica para enviar el mensaje
        // Por ejemplo, enviarlo a un servidor con AJAX
        console.log("Nombre:", nombre);
        console.log("Mensaje:", mensaje);
		
		 // Mostrar mensaje de "Mensaje enviado"
		alert("Mensaje enviado");
    }

    function actualizarContadorArticulos() {
    // Obtener la cantidad de artículos en cada sección
    const cantidadDeportes = document.querySelectorAll("#deporte div").length;
    const cantidadNegocios = document.querySelectorAll("#negocios div").length;
    const cantidadGenerales = document.querySelectorAll("#inicio div").length;

    // Sumar todas las cantidades
    const totalArticulos = cantidadDeportes + cantidadNegocios + cantidadGenerales;

    // Actualizar el contador en el HTML
    document.getElementById("contador-articulos").textContent = `Cantidad de artículos: ${totalArticulos}`;
}



window.addEventListener("scroll", function() {
    // Obtener la posición actual del scroll
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Obtener la altura total de la página
    var totalHeight = document.body.scrollHeight - window.innerHeight;

    // Definir un umbral para mostrar el formulario (por ejemplo, 100 píxeles antes del final de la página)
    var threshold = 100;

    // Mostrar el formulario cuando el usuario esté cerca del final de la página
    if (totalHeight - scrollPosition < threshold) {
        document.getElementById("contacto").style.bottom = "10px"; // Mostrar el formulario
    } else {
        document.getElementById("contacto").style.bottom = "-200px"; // Ocultar el formulario
    }
});





    // Mostrar fecha y hora en tiempo real
    mostrarFechaHora();
    setInterval(mostrarFechaHora, 1000); // Actualizar cada segundo

    // Evento para agregar un artículo
    document.getElementById("boton-agregar-articulo").addEventListener("click", function() {
        agregarArticulo();
        actualizarContadorArticulos();
    });

    // Evento para enviar el formulario de contacto
    document.getElementById("boton-enviar-contacto").addEventListener("click", enviarMensaje);
});