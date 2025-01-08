    // const PREGUNTA1 = document.querySelector('primera-pregunta');
    // const PREGUNTA2= document.querySelector('segunda-pregunta');
    // const PREGUNTA3 = document.querySelector('tercera-pregunta');

let btnComenzar = document.getElementById('btn-comenzar');

// Hacemos aparecer primera pregunta

window.onload = () => document.getElementById('portada-examen').style.display = 'block';

// Creamos una función que ocultará y mostrará los divs de preguntas

function mostrarOcultar(ocultarId, mostrarId) {
    document.getElementById(ocultarId).style.display = 'none';
    document.getElementById(mostrarId).style.display = 'block';
}

btnComenzar.addEventListener ('click', function() {
    mostrarOcultar('portada-examen', 'primera-pregunta');
})

    // CUENTA ATRÁS

    let cuentaAtras = 5;

    setInterval(() => {
        cuentaAtras--;
        document.getElementById('cuenta-atras').innerText = cuentaAtras;
    }, 1200);


setTimeout(() => {
    document.querySelector('#portada-examen').style.display = 'none';
    document.querySelector('#primera-pregunta').style.display = 'block';
}, 6000);

// Definimos 5 segundos para contestar y pulsar el botón
// setTimeout(() => {
//         document.querySelector('#primera-pregunta').style.display = 'none';
//     }, 5000);