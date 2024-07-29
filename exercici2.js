/* EXERCICI 1.2 Operador ternari 

Exercici 1
Operador ternari bàsic: Escriu una funció potConduir que accepti l'edat com a paràmetre i 
utilitzi l'operador ternari per determinar si l'usuari pot conduir. 
Si l'edat és 18 o més, ha de retornar 'Pots conduir'. Si no, ha de retornar 'No pots conduir' */

function potConduir(edat) {
    return (edat >= 18)
        ? `Pots conduir`
        : `No pots conduir`
}

edat = 23
console.log(potConduir(edat))

/* Exercici 2:
Ús amb operadors de comparació: Escriu una expressió que utilitzi l'operador ternari 
per determinar quin dels dos nombres donats (num1 i num2) és més gran. Si num1 és més gran, 
retorna 'num1 és més gran'. Si no, retorna 'num2 és més gran */

let num1 = 3
let num2 = 7

let nombres =
    (num1 > num2)
        ? `El num 1: ${num1} és més gran`
        : `El num 2: ${num2} és més gran`

console.log(nombres)

/* Exercici 3: 
Ús enllaçat d'operadors ternaris: Escriu una expressió que utilitzi enllaços d'operadors 
ternaris per determinar si un número és positiu, negatiu o zero. */

let num = -8
let resultat =
    (num === 0)
        ? `El número és zero`
        : num > 0
            ? `El número és positiu`
            : `El número és negatiu`

console.log(resultat)

/*Operador ternari amb funcions: Crea una funció trobarMaxim que accepti tres paràmetres (a, b, c) 
i utilitzi l'operador ternari per determinar el valor màxim. */

function trobarMaxim(a, b, c) {
    return (a > b && a > c)
        ? `${a} és el valor màxim`
        : (b > a && b > c)
            ? `${b} és el valor màxim`
            : `${c} és el valor màxim`
}

let a = 7
let b = 10
let c = 9

console.log(trobarMaxim(a, b, c))

/* Exercici 4:
Operador ternari dins un bucle: Escriu una funció parOImpar que accepti un array de 
números i utilitzi un bucle per a recórrer l'array. Dins del bucle, utilitza l'operador 
ternari per a determinar si cada número és parell o imparell. */

const arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function parOImpar(array) {
    for (const i in array) {
        let result = (arrayNums[i] % 2) 
                        ? `${arrayNums[i]} és imparell`
                        : `${arrayNums[i]} és parell`
        
        console.log(result)
    }
}

parOImpar(arrayNums)