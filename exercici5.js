/* EXERCICI 1.5 Array transformations

Exercici 1:
Map: Teniu un array de números [1, 2, 3, 4]. 
Crea una nova array que contingui el quadrat de cada número. */

const numsArray = [1, 2, 3, 4]
const quadratsArray = numsArray.map(num => num * num) 
console.log(quadratsArray)

/* Exercici 2:
Filter: Teniu una array de números [1, 2, 3, 4]. 
Crea una nova array que només contingui els números parells. */

const parellsArray = numsArray.filter(num => num % 2 === 0)
console.log(parellsArray)

/* Exercici 3:
Find: Teniu una array de números [1, 10 , 8, 11]. 
Utilitza la funció find per a trobar el primer número que és major a 10 */

const numsArray2 = [1, 10 , 8, 11]
const major = numsArray2.find(num => num > 10)
console.log(major)

/* Exercici 4:
Reduce: Teniu una array de números [13, 7, 8, 21]. 
Fes servir la funció reduce per a calcular la suma total dels números. */

const numsArray3 = [13, 7, 8, 21]
const sumaTotal = numsArray3.reduce((acomulador, numeros) => acomulador + numeros, 0)
console.log(sumaTotal)

/* Exercici 5:
Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", 
crea una funció en una sola línia que faci el següent:
- Filtra els nombres majors o iguals a 10.
- Multiplica cada nombre filtrat per 2.
- Calcula la suma dels nombres filtrats i multiplicats per 2.
- La funció ha de retornar el resultat de la suma. */

const numsArray4 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9]
const calculaSuma = numsArray4.filter(num => num >= 10).map(num => num * 2).reduce((acomulador, nums) => acomulador + nums, 0)
console.log(calculaSuma)

/* Exercici 6:
Every / Some: Usa every i some per a determinar si tots o alguns dels elements de 
l'array [11, 12, 13, 14] són majors que 10, respectivament */

const numsArray5 = [11, 12, 13, 14]
const totsMajors = numsArray5.every(num => num > 10)
const algunsMajors = numsArray5.some(num => num > 10)
console.log(totsMajors)
console.log(algunsMajors)