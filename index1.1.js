/*
Nivel 01 - Exercici 1 
Crea una función que muestre por consola el nombre de usuario al invocarla pasándole el nombre como parámetro.
*/

function myFunction(x) {
    return console.log(x)
}
myFunction('Carlos')

/*
Nivel 02 - Exercici 1
Muestra por consola el nombre y apellidos del usuario mediante template literales, guardándolos en variables y referenciándolas en la impresión del mensaje.
*/
function fullName() {
    const name = 'Carlos'
    const lastName = 'Oliveira'
    return console.log(`me llamo ${name} ${lastName}`)
}
fullName()

/*
Nivel 02 - Exercici 2
Invoca una función que devuelva un valor desde dentro de una template literal.
*/

function lastName() {
    const lastName = 'Oliveira'
    return console.log(lastName)
}
`${lastName()}`


/*
Nivel 03 - Exercici 1
Crea una matriz de diez funciones y rellena mediante un bucle de forma que cada función cuente del 0 al 9 por la consola. Invoca cada función del array iterativamente. Deberá mostrarse por consola la cuenta del 0 al 9 diez veces.
*/


const myArray = [myArray(), myArray(), myArray(), myArray(), myArray(), myArray(), myArray(), myArray(), myArray(), myArray()]

function myArray() {

    const myArray1 = []

    for (let j = 0; j < 10; j++) {
        myArray1.push(j)
    }

    console.log(myArray1)

}

myArray()

/*
Nivel 03 - Exercici 2
Crea una función anónima autoinvocable igualada a una variable que muestre por consola el nombre del usuario a recibo como parámetro.
*/

let name = function (name) { return console.log(name) }




