// RECAP JS :)

// variabili
// una variabile è un contenitore per un valore
// con le parole let e const dichiariamo una variabile con visibilità (scope) di blocco

let x = 50
const z = 'stefano'

if (true) {
  let y = 10
}

// console.log(y) // <-- errore! non è visibile fuori dal blocco dell'if

// tipi di valore primitivi:
// string
// number
// boolean
// undefined (tipo di una variabile a cui non è mai stato assegnato un valore)
// null (indica l'esplicita assenza di un valore)

let withoutValue
console.log(withoutValue) // <-- undefined

// JS è un linguaggio DEBOLMENTE TIPIZZATO (weakly typed)
// x = true
// x = 'stefano'
// stefano ve lo proibisce :)
// se volete cambiare il TIPO di un dato dentro una variabile, create una NUOVA VARIABILE per ospitarlo

console.log(x) // <-- 50
console.log(typeof x) // <-- number

const myString = 'Hello world!'

console.log(myString.slice(0, 5).toLocaleUpperCase())

// tipi di valore NON primitivi:
// ARRAY
const myArray = [1, 2, 3]
const mixedArray = [1, 'miao', true] // però si usa poco, normalmente si preferisce lavorare con array mono-type

// cosa possiamo fare con gli array?
// inserire nuovi valori
myArray.push(4) // <-- inserisco un valore in fondo all'array
myArray.unshift(0) // <-- inserisco un valore all'inizio dell'array

// elimino valori
myArray.pop() // <-- elimina l'ultimo valore dall'array
myArray.shift() // <-- elimina il primo valore dall'array
myArray.splice(2, 1) // <-- elimina da una posizione tot elementi

// [0, 1, 2, 3, 4] --> [1, 2]
console.log(myArray)

// come si accede ad un elemento di un array? tramite la notazione [ ]
console.log(myArray[0])
console.log(myArray[1])

// OBJECTS
// un oggetto in JS è una struttura dati atta a contenere multipli valori, salvandoli
// sotto forma di coppie CHIAVE: VALORE
const myObject = {
  firstName: 'Stefano',
  lastName: 'Casasola',
  'is-old': true,
  skills: ['HTML', 'JS'],
  area: {
    regione: 'FVG',
    'near-trieste': true,
  },
  olek: {
    skills: ['HTML', 'CSS', 'JS'],
  },
}

// da un oggetto posso estrarre un valore utilizzando il nome della sua chiave (proprietà)
// posso utilizzarla con la DOT NOTATION "."
console.log(myObject.lastName) // <-- 'Casasola'
// posso anche utilizzarla con la SQUARE BRACKETS NOTATION "[ ]"
console.log(myObject['lastName']) // <-- 'Casasola'

const property = 'skills'

console.log(myObject.skills)

console.log(myObject.property) // <-- undefined
console.log(myObject[property]) // <-- ['HTML', 'JS']
console.log(myObject.olek[property]) // <-- ['HTML', 'CSS', 'JS']

console.log(myObject.area.regione) // <-- 'FVG'

console.log(myObject['is-old'])

// SPREAD OPERATOR
// lo spread operator (...) permette di prendere in un colpo solo tutto il contenuto di un oggetto (tutte le coppie) oppure
// tutto il contenuto di un array

const myObj1 = {
  firstName: 'Stefano',
  age: 18,
}

const myObj2 = {
  ...myObj1,
  lastName: 'Casasola',
  age: 25,
}

// risultato
// {
//     firstName: 'Stefano',
//     age: 25,
//     lastName: 'Casasola'
// }

const myArr1 = [1, 2, 3]

const myArr2 = [...myArr1] // ho creato una vera copia di myArr1
const myArr3 = [...myArr1, 4] // [1, 2, 3, 4]

// OBJECT DESTRUCTURING
const { age } = myObj1 // ho creato una variabile che si chiama "age" con valore 18
console.log(age) // 18

// un altro modo per creare una copia "vera" di un oggetto è utilizzare Object.assign()

const anotherMyObj1 = Object.assign({}, myObj1) // una vera copia di myObj1

const o1 = {
  firstName: 'Stefano',
}

const o2 = o1
// o2 NON È una vera copia di o1
o2.firstName = 'Piero'
console.log(o1.firstName) // 'Piero'

const o3 = {
  firstName: 'Stefano',
}

// const o4 = { ...o3 } // o3 e o4 sono oggetti DISTINTI
const o4 = Object.assign({}, o3) // o3 e o4 sono oggetti DISTINTI
o3.firstName = 'Piero'
console.log(o4.firstName)

const o5 = {
  firstName: 'Mohamed',
}

const o6 = {
  lastName: 'Casasola',
}

const o7 = Object.assign(o5, o6)
console.log('o7', o7)
console.log('o6', o6)
console.log('o5', o5)

// IF / ELSE
let cartTotal = 40

const shippingCost = 5
const freeShippingThreshold = 50 // raggiunta questa soglia la spedizione è gratuita

let total // ?

if (cartTotal >= freeShippingThreshold) {
  total = cartTotal
} else {
  total = cartTotal + shippingCost
}

// ternary operator
let ternaryTotal =
  cartTotal >= freeShippingThreshold ? cartTotal : cartTotal + shippingCost

// C I C L I
// for -> esegue un blocco di istruzioni un numero PREDEFINITO di volte
// while -> continua ad eseguire un blocco di istruzioni fino a che la condizione imposta non è più vera

for (let i = 0; i < 10; i++) {
  // blocco di istruzioni che verrà ripetuto per DIECI volte
  // la i prenderà i valori da 0 a 9
  console.log('bau!', i)
}

let arrToCycle = [7, 34, 980, 1, 45]

for (let i = 0; i < 5; i++) {
  console.log(arrToCycle[i])
}

arrToCycle.forEach(function (num, i) {
  console.log(num)
  console.log(i)
})

// .map() trasforma un array in un altro array
const incrementedArray = arrToCycle.map((num) => {
  return num + 10
})
console.log(incrementedArray)

// .filter() ritorna un array con potenzialmente meno elementi di quello principale
const filteredArray = arrToCycle.filter((num) => {
  // devo tornare per ogni elemento una condizione booleana -> true/false
  return num > 30
})

console.log('filteredArray', filteredArray)

const sum = arrToCycle.reduce((acc, num) => {
  // ritorna il nuovo valore di acc
  return acc + num
  // acc parte da 0
}, 0)

console.log(sum)

const boh = arrToCycle.map((num) => {
  if (num > 30) {
    return num
  }
})

// se il return per un determinato elemento non viene raggiungo, nell'array risultante dal map al suo posto
// verrà inserito un undefined
console.log(boh)

// F U N Z I O N I
// una funzione è un blocco di codice riutilizzabile.
// una funzione va prima DICHIARATA e poi INVOCATA (utilizzata, richiamata)

const bark = function () {
  console.log('BAU')
}

bark() // 'BAU'
bark() // 'BAU'

// una funzione può accettare dei parametri al fine di "personalizzare" il suo comportamento

const customMessage = function (message) {
  console.log(message)
}

customMessage('ERROR')
customMessage('EVERYTHING IS OK!')

// una funzione può decidere di ritornare un valore se si desidera trattare l'invocazione di tale funzione
// come il suo valore di ritorno

const summingFunction = function () {
  const x = 5 + 10
  //   console.log(x)
  return x
}

let totale

summingFunction() // vale 15
console.log(summingFunction() + 10) // 25

summingFunction() // vale 15
console.log(summingFunction() + 10) // 25

// ARROW FUNCTIONS

const sumTwoNumbers = function (n1, n2) {
  return n1 + n2
}

const seven = sumTwoNumbers(3, 4) // torna il numero 7
console.log(seven)

// versione freccia

const sumTwoNumbersArrow = (n1, n2) => {
  return n1 + n2
}

const seven2 = sumTwoNumbersArrow(3, 4) // torna il numero 7
console.log(seven2)

// due differenze con le funzioni "tradizionali":
// 1) se una funzione freccia ritorna solamente un valore, è possibile omettere le graffe e la parola "return"
const anothersumTwoNumbersArrow = (n1, n2) => n1 + n2

const error = (n1, n2) => {
  n1 + n2
}

console.log(error(3, 4))
// torna undefined! perchè o mettete le graffe E il return, o non ci va nessuno dei due

// 2) il modo in cui viene calcolato "this"
// le arrow functions NON possiedono un proprio "this", ma ereditano il "this" del loro contesto d'esecuzione

document.getElementById('first').addEventListener('click', function (e) {
  console.log(e)
  console.log(this)
})

document.getElementById('second').addEventListener('click', (e) => {
  console.log(e)
  console.log(this)
})

// BACKTICKS
// sono un delimitatore di stringa, come '' o le ""
// vantaggio 1) delimita una stringa in modo più flessibile, con volendo indentazioni, a capo etc.
const longText = `
    Lorem, ipsum dolor sit amet
    consectetur adipisicing elit. Quae impedit
    hic et. Asperiores amet perferendis iste
    placeat adipisci recusandae eius nihil
    distinctio eveniet natus! Tenetur minus
    laboriosam molestias cumque qui.
`

// vantaggio 2) iniettare comodamente variabili nelle stringhe
const myName = 'Stefano'

console.log('Mi chiamo ' + myName + ' e insegno ad EPICODE')
console.log(`Mi chiamo ${myName} e insegno ad EPICODE`)
