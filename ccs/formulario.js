document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('reserva-form');
    const seccionReserva = document.getElementById('formulario-reserva');
    const btnCerrar = document.getElementById('btn-cerrar');
    const mensajeExito = document.getElementById('mensaje-confirmacion');

    // Función para cerrar el formulario con la X
    btnCerrar.addEventListener('click', () => {
        seccionReserva.style.display = 'none';
    });

    // Función al enviar el formulario
    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue

        // Mostrar mensaje de éxito
        mensajeExito.style.display = 'block';
        
        // Opcional: Alerta clásica del navegador
        alert("¡Has reservado tu cita correctamente!");

        // Resetear los campos del formulario
        formulario.reset();

        // Opcional: Cerrar todo después de 3 segundos de mostrar el mensaje
        setTimeout(() => {
            window.location.href = "Proyecto BarberSebas.html";
        }, 2000);
    });
});