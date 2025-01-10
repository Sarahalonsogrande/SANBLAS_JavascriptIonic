/*
* Crear clase vehículo
Atributos:
- Nombre
- Color

Método:
- Arrancar ('Estoy arrancado')

* Crear clase automóvil que herede de vehículo:
Atributos:
- Marca
- Modelo

Método:
- Arrancar ('Soy un automóvil, estoy arrancado')

* Crear clase barco que herede de vehículo:
Atributos:
- Eslora
- Manga

Método:
- Arrancar ('Soy un barco, estoy arrancado')

* Crear una instancia de automovil y otra de barco:
Arrancar ambos.

* Preguntar si:
- Automovil es instancia de vehículo.
- Automovil es instancia de automóvil.
- Barco es instancia de vehículo.
- Automovil es instancia de barco.
*/

class Vehiculo {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }

    arrancar() {
        console.log('Estoy arrancado');
    }
}

class Automovil extends Vehiculo {
    constructor(nombre, color, marca, modelo) {
        super(nombre, color)
        this.marca = marca;
        this.modelo = modelo;
    }

    arrancar() {
        console.log('Soy un automóvil, estoy arrancado');
    }
}

class Barco extends Vehiculo {
    constructor(nombre, color, eslora, manga) {
        super(nombre, color)
        this.eslora = eslora;
        this.manga = manga;
    }

    arrancar() {
        console.log('Soy un barco, estoy arrancado');
    }
}

const AUTOMOVIL = new Vehiculo('Pichurri', 'Red', 'Chevrolett', 'Aveo');
const BARCO = new Vehiculo('Pichurro', 'Black', 100, 'Manga Entera');

AUTOMOVIL.arrancar();
