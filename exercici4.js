/* EXERCICI 1.4 Rest & Spread operators

Exercici 1:
Operador Spread en Arrays: Crea dues arrays, array1 i array2. 
Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2. */

const array1 = [1, 4, 6, 434, 34]
const array2 = [45, 'hola', 74, 7]
const array3 = [...array1, ...array2]
console.log(array3)

/* Exercici 2:
Operador Rest en Funcions: Crea una funció 'suma' que utilitzi 
l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma. */

function sumaNumbers(...numbers) {
    let total = 50
    for (const num of numbers) {
        total += num
    }
    return total
}

numbers = 1 + 6 + 8
console.log(sumaNumbers(numbers))

/* Exercici 3:
Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 
'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 
'objecte2' i comprova que 'objecte1' no ha canviat. */

const objecte1 = {
    nom: "Ziggy",
    animal: "gat",
    lloc: "Barcelona"
}

const objecte2 = {...objecte1, lloc: "casa"}

console.log(objecte2)
console.log(objecte1)

/* Exercici 4:
Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest 
per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable. */

const countries = ["Germany", "Italy", "Phillipines", "UK", "Thailand"]
const [first, second, ...rest] = countries

console.log(first)
console.log(second)
console.log(rest)

/* Exercici 5:
Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements 
i crida la funció utilitzant l'operador spread amb aquesta array. */

function spreadFunction(a, b, c) {
    console.log(`Els tres elements son: ${a}, ${b} i ${c}`)
}

const arrayElements = ["llapis", "ordinador", "aigua"]
spreadFunction(...arrayElements)

/* Exercici 6:
Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. 
Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.*/

const person = {
    name: "Ethel",
    profession: "singer",
    age: 35,
    hobbies: ["sing", "cook", "read books"]
}

const locationPerson = {
    city: "London",
    country: "UK"
}

const completeInfo = {...person, ...locationPerson}
console.log(completeInfo)