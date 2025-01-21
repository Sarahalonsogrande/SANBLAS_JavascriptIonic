function FechaNacimiento(d, m, a) {
    this.dia = d;
    this.mes = m;
    this.anio = a;
}

/** 
 * @param {String} nombre 
 * @param {String} apellido 
 * @param {FechaNacimiento} fecha 
 * @constructor Creación de una persona 
 */
function Persona(nombre, apellido, fecha) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha = fecha;
}

var a = new Persona("alexandre", "brillant",
    new FechaNacimiento(10, 11, 12));
var b = a;
console.log(b);