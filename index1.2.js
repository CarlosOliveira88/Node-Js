//Entrega 1.2: Classes & Arrow Functions

/*
Nivel 01 - Exercici 1 
Muestra por la consola el resultado de una arrow function autoinvocable que sume dos números.
*/


(  sum = (a, b) => {
    return a + b
})()

console.log(sum(10, 20))

/*
Nivel 02 - Exercici 1 
Crea una arrow function que, recibiendo un parámetro, devuelva un objeto con un atributo que tenga como valor el parámetro recibido.
*/

const car1 = (x) => {

    let car = [{ 'color': x }]

    return console.log(car[0])
}
car1('green')


/*
Nivel 02 - Exercici 2 
Crea una clase "Persona" que reciba un parámetro 'nombre' al ser instanciada. La clase incluirá un método llamado Nombre que imprima por consola el parámetro 'nombre'. Invoca el método llamado Nombre desde fuera de la clase.
*/


class Persona {
    constructor(nombre) { this.nombre = nombre }

    getNombre() { console.log(this.nombre) }
}
let persona1 = new Persona(`JOAO`)
persona1.getNombre()


/*
Nivel 03 - Exercici 1 
Escribe una función creadora de objetos que realice instancias de una clase abstracta. Inbócala con diferentes definiciones.
*/

// clase abstracta
class Employee {
    constructor () {
        if (this.constructor === Employee) {
            throw new Error("La instancia de la clase Abstract no se puede instanciar");
        }
    }
}

try {
    let employee = new Employee()
} catch (error) {
    console.log(error.message);
}

function crearObjects(){
Object.create(Employee.prototype)
}

