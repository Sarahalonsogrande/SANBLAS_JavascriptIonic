let cuenta = 'ES1212343456420456323532';
let pais = cuenta.substring(0, 1);
let dc = cuenta.substring(2, 3);
let entidad = cuenta.substring(4, 7);
let sucursal = cuenta.substring(8, 11);
let dControl = cuenta.substring(12, 13);
let numCuenta = cuenta.substring(14, 23);



const cuentaBancaria = `El país es ${pais}, el dígito de control es ${dc}, la entidad es ${codigo}, la sucursal es ${sucursal}, los dígitos de control son ${dControl}, y el número de cuenta es ${numCuenta}`;

console.log(cuentaBancaria);