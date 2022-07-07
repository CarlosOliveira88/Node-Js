//Entrega 1.2: Classes & Arrow Functions

/*
Nivel 01 - Exercici 1 
Muestra por la consola el resultado de una arrow function autoinvocable que sume dos números.
*/
console.log('Nivel 01 - Exercici 1')
const sum = (a, b) => {
    return a + b
}
console.log(sum(10, 20))

/*
Nivel 02 - Exercici 1 
Crea una arrow function que, recibiendo un parámetro, devuelva un objeto con un atributo que tenga como valor el parámetro recibido.
*/
console.log('Nivel 02 - Exercici 1')
const car1 = (x) => {
    let car = [{ 'color': x }]
    return console.log(car[0])
}
car1('green')


/*
Nivel 02 - Exercici 2 
Crea una clase "Persona" que reciba un parámetro 'nombre' al ser instanciada. La clase incluirá un método llamado Nombre que imprima por consola el parámetro 'nombre'. Invoca el método llamado Nombre desde fuera de la clase.
*/
console.log('Nivel 02 - Exercici 2')

class Persona {
    constructor(nombre) { this.nombre = nombre }

    getNombre() { return console.log(this.nombre) }
}
let persona1 = new Persona(`JOAO`)
persona1.getNombre()


/*
Nivel 03 - Exercici 1 
Escribe una función creadora de objetos que realice instancias de una clase abstracta. Inbócala con diferentes definiciones.
*/
console.log('Nivel 03 - Exercici 1')

function myFunction() {
    class Persona {
        constructor(nombre, edad, nacionalidad) {
            this.nombre = nombre
            this.edad = edad
            this.nacionalidad = nacionalidad
        }

        getNombre() { return console.log(this.nombre) }
        getEdad() { return console.log(this.edad) }
        getNacionalidad() { return console.log(this.nacionalidad) }
    }

    let persona1 = new Persona(`David`, '30', `España`)
persona1.getNombre()
persona1.getEdad()
persona1.getNacionalidad()
}

myFunction()


