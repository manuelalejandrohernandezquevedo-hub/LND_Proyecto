document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('reserva-form');
    const seccionReserva = document.getElementById('formulario-reserva');
    const btnCerrar = document.getElementById('btn-cerrar');
    const mensajeExito = document.getElementById('mensaje-confirmacion');

    btnCerrar.addEventListener('click', () => {
        seccionReserva.style.display = 'none';
    });

    formulario.addEventListener('submit', (e) => {
        e.preventDefault(); 

        mensajeExito.style.display = 'block';
              
        alert("¡Has reservado tu cita correctamente!");
   
        formulario.reset();
        
        setTimeout(() => {
            window.location.href = "Proyecto BarberSebas.html";
        }, 2000);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modalReserva");
    const botonesReserva = document.querySelectorAll('.btn-grande, .btn-reservar-nav');
    const spanClose = document.getElementsByClassName("close-modal")[0];
   
    botonesReserva.forEach(boton => {
        boton.onclick = function(e) {
            e.preventDefault(); // 
            modal.style.display = "block";
        }
    });

    spanClose.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.getElementById('form-cita').onsubmit = function(e) {
        e.preventDefault();
        alert("¡Petición enviada, Sebas! Te contactaremos pronto.");
        modal.style.display = "none";
    }
});