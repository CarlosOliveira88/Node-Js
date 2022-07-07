//Entrega 1.3: Promises & Callbacks

/*
Nivel 01 - Exercici 1 
Crea una función que devuelva una Promise que invoque la función resolve() o reject() que recibe. Inbócala pasándole las dos funciones de forma que impriman un mensaje diferente dependiendo de si la Promise se resuelve o no.
*/



let p1 = new Promise(function (resolve, reject) {
    resolve('Sucess');
    reject('Error!');
});

p1.then(function (value) { console.log(value) }, function (reason) { console.log(reason) });

/*
Nivel 01 - Exercici 2 
Crea una arrow function que reciba un parámetro y una función callback y le pase a la función un mensaje u otro (que se imprimirá por consola) en función del parámetro recibido.
*/

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


export const employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

export const salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];

export const getEmployee = (id) => {
    return new Promise(function () {

        for (let i = 0; i < employees.length; i++) {

            if (id === employees[i].id) {
                console.log(employees[i].name)
            }
        }

    });
}


/*
Nivel 02 - Exercici 2
Crea otra arrow function getSalary() similar a la anterior que reciba como parámetro un objeto employee y devuelva su salario.
*/

export const getSalary = (id) => {
    return new Promise(function () {
        for (let i = 0; i < salaries.length; i++) {

            if (id === salaries[i].id) {
                console.log(salaries[i].salary)
            }
        }

    });

}


/*
Nivel 02 - Exercici 3
Invoca la primera función getEmployee() y después getSalary() anidando la ejecución de las dos promisas de forma que se devuelva por la consola el nombre del empleado/a y su salario.
*/

const x = 3
getEmployee(x).then(getSalary(x))

/*
Nivel 03 - Exercici 1
Fija un elemento catch en la invocación del nivel anterior que capture cualquier error y lo muestre por la consola.
*/

function falloCallback(error) {

    throw new Error('Algo falló');

    console.log("Error generado");
}
 
getEmployee(x).then(getSalary(x)).catch(falloCallback())


