/* EXERCICI 1.1 Arrow functions

Exercici 1:
Conversió de funcions: Tens una funció add que accepta dos paràmetres i retorna la seva suma. 
Converteix-la en una funció de fletxa. Per exemple: function add(a, b) {return a + b;}.
*/

let suma = (a, b) => a + b
console.log(suma(4,8)) //Output: 12

/* Exercici 2:
Funció de fletxa sense paràmetres: Crea una funció de fletxa anomenada randomNumber 
que no necessiti paràmetres i que retorni un número aleatori entre 0 i 100.
*/

let randomNumber = () => Math.floor(Math.random() * 101)
console.log(randomNumber())

/* Exercici 3:
Ús de 'this' en les funcions de fletxa: Crea una classe person que tingui una propietat name
i una funció greet que utilitzi una funció de fletxa. La funció ha d'imprimir una salutació que 
inclogui el nom de la persona. Per exemple: console.log(Hola, ${this.name});.
*/

class Person {
    constructor(name) {
        this.name = name
    }

    greet = () => {console.log(`Hola, ${this.name}`)};
}

let persona = new Person('Ivy')
persona.greet()

/* Exercici 4:
Funció de fletxa dins d'un loop: Crea una funció anomenada printNumbers que accepti un array de números 
i utilitzi un loop for per imprimir cada número a la consola utilitzant una funció de fletxa.
 */

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //Exemple

let printNumbers = (arrayNum) => {
    for (let index = 0; index < arrayNumbers.length; index++) {
        console.log(arrayNum[index])
    }
}

printNumbers(arrayNumbers)

/* Exercici 5: 
Funció de fletxa amb 'setTimeout': Crea una funció de fletxa que imprimeixi un missatge a la consola després d'esperar 3 segons.
*/

let exampleTimeout = () => setTimeout( () => {console.log(`This is a setTimeout example of 3 seconds`)}, 3000) //Equivalence in miliseconds
exampleTimeout()
