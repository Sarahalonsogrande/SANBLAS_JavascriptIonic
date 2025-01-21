/* MAL DISEÑO!!!!!!!!!! */

let numero1 = 0;
let numero2 = 0;

const BTN_SUMAR = document.getElementById('btnSumar');
const BTN_RESTAR = document.getElementById('btnRestar');

function sumar() {
    numero1 = parseInt(document.getElementById('numero1').value);
    numero2 = parseInt(document.getElementById('numero2').value);

    if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById('error').style.display = 'block';
    }

    let resultado = numero1 + numero2;

    document.getElementById('resultado').value = resultado;
}

BTN_SUMAR.addEventListener('click', sumar);

function restar() {
    numero1 = parseInt(document.getElementById('numero1').value);
    numero2 = parseInt(document.getElementById('numero2').value);
    let resultado = numero1 + numero2;
    document.getElementById('resultado').value = resultado;
}

BTN_RESTAR.addEventListener('click', restar);

// function sumar(num1, num2) {
//     const NO_NUMBER = typeof num1 !== 'number' && typeof num2 !== 'number';
//     const ES_NAN = isNaN(num1) || isNaN(num2);

//     // Validamos si son números.
//     if (NO_NUMBER, ES_NAN) {
//         throw new error('Error: Debe ingresar números.');
//     }

// }