//Entrega 1.3: Promises & Callbacks

/*
Nivel 01 - Exercici 1 
Crea una función que devuelva una Promise que invoque la función resolve() o reject() que recibe. Inbócala pasándole las dos funciones de forma que impriman un mensaje diferente dependiendo de si la Promise se resuelve o no.
*/

function myFunction() {

    let p1 = new Promise(function (resolve, reject) {
        resolve('Sucess');
        reject('Error!');
    });

    p1.then(function (value) { console.log(value) }, function (reason) { console.log(reason) });

}
//myFunction()

// /*
// Nivel 01 - Exercici 2 
// Crea una arrow function que reciba un parámetro y una función callback y le pase a la función un mensaje u otro (que se imprimirá por consola) en función del parámetro recibido.
// */

const miNombre = (city, callback) => {

    let myCity = `vivo en ` + city
    callback(myCity)
}

function city(city) {
    console.log(city);
}

miNombre('barcelona', city)

/*
Nivel 02 - Exercici 1
Dados los objetos employees y salarias, crea una arrow function getEmployee() que devuelva una Promise efectuando la búsqueda en el objeto por su id.
*/


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


/*
Nivel 02 - Exercici 2
Crea otra arrow function getSalary() similar a la anterior que reciba como parámetro un objeto employee y devuelva su salario.
*/

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


/*
Nivel 02 - Exercici 3
Invoca la primera función getEmployee() y después getSalary() anidando la ejecución de las dos promisas de forma que se devuelva por la consola el nombre del empleado/a y su salario.
*/


getEmployee(2)
.then(emp => {
    getSalary(emp)
    .then(sal => console.log(`el salario del ${emp.name} es ${sal}`))
})
.catch(err => console.log(err))

/*
Nivel 03 - Exercici 1
Fija un elemento catch en la invocación del nivel anterior que capture cualquier error y lo muestre por la consola.
*/

function falloCallback(error) {

    throw new Error('Algo falló');

    console.log("Error generado");
}



