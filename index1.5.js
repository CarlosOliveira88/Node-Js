/*Entrega 1.5: Node Utils

Nivel 01 - Exercici 1
Crea una función que, al ejecutarla, escriba una frase en un archivo.
index1.5.js
*/

function crearText() {

    const fs = require('fs');

    const data = ' congratulations Carlos!'


    fs.writeFile('jacare.txt', data,

        function (err) {
            if (err) throw err;

            console.log("Data foi escrito con sucesso.")
        });

}


crearText()

/*
Nivel 01 - Exercici 2
Crea otra función que muestre por consola el contenido del archivo del ejercicio anterior.
*/

function verContenido() {

    const fs = require('fs');


    fs.readFile('jacare.txt',

        function (err, data) {
            if (err) throw err;

            console.log(data.toString('utf8'))
        });

}
verContenido()

/*
Nivel 01 - Exercici 3
Crea una función que comprima el archivo del nivel 1.
*/


gzipme("jacare.txt");


/*
Nivel 02 - Exercici 1
Crea una función que imprima recursivamente un mensaje por la consola con demoras de un segundo.
*/
function retraso() {

    console.log('Hello')
    console.log('mundo')
    console.log('inteiro')

}

setTimeout(retraso, 1000)

/*
Nivel 02 - Exercici 2
Crea una función que liste por la consola el contenido del directorio de usuario del ordenador utilizando Node Child Processes.
*/



/*
Nivel 03 - Exercici 1

Crea una función que cree dos archivos codificados en hexadecimal y en base64 respectivamente, a partir del archivo del nivel 1.

Crea una función que guarde los archivos del punto anterior, ahora cifrados con el algoritmo aes-192-cbc, y borre los archivos iniciales.

Crea otra función que desencripte y descodifique los archivos del apartado anterior volviendo a generar una copia del inicial.

Incluye un README con instrucciones para la ejecución de cada parte.
*/





