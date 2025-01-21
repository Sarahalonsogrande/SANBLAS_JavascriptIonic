// class Pelicula {
//     constructor(id, titulo, ano, genero, calificacion) {
//         this.id = id;
//         this.titulo = titulo;
//         this.director = director;
//         this.ano = ano;
//         this.genero = genero;
//         this.calificacion = calificacion;
//     }

//     mostrar() {
//         console.log(`ID: ${this.id}`);
//     }
// }

// let pelicula1 = new Pelicula(1, "Titanic", "James cameron", 1997, "Drama", 0)
// pelicula1.mostrar()

class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Rectangulo {
    constructor(base, altura, posicion) {
        this.base = base;
        this.altura = altura;
        this.posicion = posicion;
    }

    calcularArea() {
        return this.base * this.altura;
    }

}

let punto1 = new Punto(2, 3);

let rectangulo1 = new Rectangulo(10, 20, punto1);

console.log(calcularArea(10, 20));

class Malo {
    constructor(nombre, x, y, nivelMaldad, nivelPoder) {
        this.nombre = nombre;
        this.x = x;
        this.y = y;
        this.nivelMaldad = nivelMaldad;
        this.nivelPoder = nivelPoder;
    }
}

class MaloMovil extends Malo {
    constructor(x, y, )
}

let malo1 = new Malo()