/* EXERCICI 1.3 Callbacks 

Exercici 1:
Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. 
La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre. */

function processar(nombre, callback) {
    return callback(nombre)
}

function myCallback(num) {
    console.log(`El nombre és ${num}`)
}

let number = 954
processar(number, myCallback)

/* Exercici 2:
Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: 
dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos 
nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres. */

function calculadora(numero1, numero2, callback) {
    return callback(numero1, numero2);
}

function mathCallback(num1, num2) {
    let suma = num1 + num2;
    console.log(`La suma dels nombres ${num1} i ${num2} és ${suma}`);
}

let number1 = 56;
let number2 = 6;
calculadora(number1, number2, mathCallback);

/* Exercici 3: 
Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: 
un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, 
passant el nom com a paràmetre. */

function esperarISaludar(name, callback) {
    setTimeout(() => {callback(name);}, 2000)
}

function nameCallback(name) {
    console.log(`El nom és ${name}`)
}

let nom = 'Mei';
esperarISaludar(nom, nameCallback)

/* Exercici 4:
Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una 
funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array. */

const arrayNumeros = [1, 5, 5, 4, 24, 56, [45, 6]]

function processarElements(array, callback){ 
    let result = ""
    for (let index = 0; index < array.length; index++) {
        result += array[index] + ", "
    }

    result = result.slice(0, -2)
    callback(result)
}

function arrayCallback(array) {
    console.log(`L'array és ${array}`)
}

processarElements(arrayNumeros, arrayCallback)

/* Exercici 5:
Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i 
una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules 
i llavors invocar la funció de callback amb la cadena transformada.
*/

function processarCadena(string, callback) {
    return callback(string.toUpperCase())
}

function cadenaCallback(str) {
    console.log(str)
}

let phrase = "Hello, this is a string example"
processarCadena(phrase, cadenaCallback)