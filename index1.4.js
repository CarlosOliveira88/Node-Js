
const employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

const salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];
const getEmployee = (x) => {
    return new Promise(function (resolve, reject) {

        for (let i = 0; i < employees.length; i++) {

            if (x === employees[i].id) {
                resolve(employees[i])
            }
        }
        reject('Algo ha fallado con el empleado!')

    });
}
const getSalary = (employee) => {
    return new Promise(function (resolve, reject) {

        for (let i = 0; i < salaries.length; i++) {

            if (employee.id === salaries[i].id) {
                return resolve(salaries[i].salary)
            }
        }

        reject('Algo ha fallado con el sueldo')

    });

}

//Entrega 1.4: Async / Await

/*
Nivel 01 - Exercici 1 
Crea una función asíncrona que reciba un id de empleado/a e imprima por pantalla el nombre del empleado/a y su salario, usando las funciones getEmployee() y getSalary() que has definido en la tarea anterior.
*/

async function myFunction(x) {

    let empleado = await getEmployee(x)
    let salary = await getSalary(empleado)

    return console.log(`el salario del ${empleado.name} es ${salary}`)
}
myFunction(1)
myFunction(2)
myFunction(3)

/*
Nivel 01 - Exercici 2
Crea una nueva función asíncrona que llame a otra que devuelva una Promise que efectúe su función resolve() después de 2 segundos de su invocación.
*/
async function suma(x, y) {
  let xr = await result(x, y)
    console.log(xr)
}

function result(x, y) {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`la suma de ${x} + ${y} es ${x + y}`)
        }, 2000);
    });
}
suma(3, 5)


/*
Nivel 02 - Exercici 1

Crea una función que devuelva el doble del número que le pasa como parámetro después de 2 segundos.

Crea otra función que reciba tres números y calcule la suma de sus dobles utilizando la función anterior.
*/


function doble(number) {
    return new Promise((resolve) => {
        const doble = number * 2

        setTimeout(() => {
            resolve(doble)
        }, 2000);
    })
}



async function sumaDoble(num1, num2, num3) {

    let result = await doble(num1) + await doble(num2) + await doble(num3)
    return console.log(result);

}
sumaDoble(10, 20, 30)

/*
Nivel 03 - Exercici 1 
Fuerza y captura tantos errores como puedas de los niveles 1 y 2.
*/

















