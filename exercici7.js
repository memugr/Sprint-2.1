/* EXERCICI 1.7 Promises & Async/Await

Exercici 1:
Creació d'una Promesa: Crea una promesa que es resolgui després de 
2 segons i que retorni la cadena de text 'Hola, món'. */

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log('Hola, món'))
    }, 2000)
})

/* Exercici 2:
Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. 
Crea un .then que imprimeixi el resultat a la consola. */

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món')
    }, 2000);
})

myPromise2.then((message) => {
    console.log(message)
}) 

/* Exercici 3:
Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input 
és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa. */

function salutation(input) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(input === "Hola") {
                resolve('Promesa resolta i acceptada')
            } else {
                reject('Promesa rebutjada, input no és "hola"')
            }
        }), 2000
    })
}

salutation("Hola").then((message) => {
    console.log(message)
}).catch((error) => {
    console.error(error);
});

salutation("Bye").then((message) => {
    console.log(message)
}).catch((error) => {
    console.error(error)
});

/* Exercici 4:
Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar 
el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola. */

const myPromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món')
    }, 2000)
})

const asyncFunct = async () => {
    const message = await myPromise3
    console.log(message)
}

asyncFunct()

/* Exercici 5: 
Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi 
qualsevol possible error utilitzant un bloc try/catch. */

const myPromise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hola, món')
    }, 2000)
})

const asyncFunction = async () => {
    try {
        const message = await myPromise4
        console.log(message)
    } catch (error) {
        console.error(error)
    }
}

asyncFunction()

/* Exercici 6:
Promise.all: Crea dues promeses que es resolguin després de 2 i 3 
segons, respectivament. Utilitza Promise.all per a esperar que ambdues 
promeses es resolguin, i imprimeix els resultats a la consola. */

const myPromise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 5 resolta')
    }, 2000)
})

const myPromise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise 6 resolta')
    }, 3000);
})

Promise.all([myPromise5, myPromise6]).then((messages) => {
    console.log(messages)
}).catch((error) => {
    console.error(error)
})