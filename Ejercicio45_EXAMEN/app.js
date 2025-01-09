let btnComenzar = document.getElementById('btn-comenzar');
let cuentaAtras = 5;
let intervalId;

// Función para ocultar y mostrar preguntas
function mostrarOcultar(ocultarId, mostrarId) {
    document.getElementById(ocultarId).style.display = 'none';
    document.getElementById(mostrarId).style.display = 'block';
}

// Iniciar cuenta atrás
function iniciarCuentaAtras() {
    intervalId = setInterval(() => {
        cuentaAtras--;
        document.getElementById('cuenta-atras').innerText = cuentaAtras;
        if (cuentaAtras <= 0) {
            clearInterval(intervalId);
            mostrarOcultar('primera-pregunta', 'segunda-pregunta');
        }
    }, 1000); // Actualiza el contador cada segundo
}

// Mostrar la portada y luego la primera pregunta
window.onload = () => {
    document.getElementById('portada-examen').style.display = 'block'; // Muestra la portada
};

// Al hacer clic en "Comenzar", ocultamos la portada y mostramos la primera pregunta
btnComenzar.addEventListener('click', function() {
    mostrarOcultar('portada-examen', 'primera-pregunta'); // Muestra la primera pregunta
    iniciarCuentaAtras(); // Inicia la cuenta atrás cuando aparece la primera pregunta
});

// Configura el tiempo para que se muestre la primera pregunta después de 6 segundos
setTimeout(() => {
    document.querySelector('#portada-examen').style.display = 'none'; // Oculta la portada después de 6 segundos
    document.querySelector('#primera-pregunta').style.display = 'block'; // Muestra la primera pregunta
    iniciarCuentaAtras(); // Inicia la cuenta atrás cuando se muestra la primera pregunta
}, 6000);

