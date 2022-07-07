import { employees } from './index1.3.js'
import { salaries } from './index1.3.js'
import { getEmployee } from './index1.3.js'
import { getSalary } from './index1.3.js'

//Entrega 1.4: Async / Await

/*
Nivel 01 - Exercici 1 
Crea una función asíncrona que reciba un id de empleado/a e imprima por pantalla el nombre del empleado/a y su salario, usando las funciones getEmployee() y getSalary() que has definido en la tarea anterior.
*/

function myFunction(id) { getEmployee(id).then(getSalary(id)) }
 myFunction(2)


/*
Nivel 01 - Exercici 2 
Crea una nueva función asíncrona que llame a otra que devuelva una Promise que efectúe su función resolve() después de 2 segundos de su invocación.
*/
function suma(x, y) {

    console.log(x + y)
    result()

    function result() {

        const myPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(console.log('felicidades'))
            }, 2000);
        });
    }


}suma(32, 5)


/*
Nivel 02 - Exercici 1 

Crea una función que devuelva el doble del número que le pasa como parámetro después de 2 segundos.

Crea otra función que reciba tres números y calcule la suma de sus dobles utilizando la función anterior.
*/


function doble(number) {
    return number * 2
}

setTimeout(doble(40), 2000)

function sumaDoble(num1, num2, num3) {

    console.log(doble(num1))
    console.log(doble(num2))
    console.log(doble(num3))


   const result = doble(num1) + doble(num2) + doble(num3)
    console.log(result)

}
sumaDoble(10,20,30)

/*
Nivel 03 - Exercici 1 
Fuerza y captura tantos errores como puedas de los niveles 1 y 2.
*/

















