/*
    Arrays - Metodos II

*/

// .from(iterable) - convierte en array el elemento iterable
/*
let word = "hola mundo";
console.log(Array.from(word)); //convierte el string en un array, su longitud depende de cuantas letras y espacios vacios contenga

console.log(word.split()); //convierte el string en array, toma ambas palabas y los asigna al mismo indice
console.log(word.split(" ")); // agregando las comillas, se toma cada palabra y lo asigna a un indice, omitiendo los espacios vacios
*/
//------------------------------------------------------

/*
//.sort([callback]) - ordena los elementos de un array alfabeticamente (valor unicode), si le pasamos un callback lor ordena en funcion del algoritmo que le pasemos

const letters = ['n', 'z', 'a', 'f'];
const numbers = [1,400,100,5,0];

console.log(letters);
console.log(letters.sort()); //los ordena alfabeticamente


console.log(numbers.sort()); //en este caso no funciona con numeros, debido al valor unicode

console.log(numbers.sort((a,b) => a - b)); // se tiene que usar un callbak para poder ordenar 
                    //compara en pares lo elementos del array y determina cual es el menor y mayor
/*
    funcion menorMayor(a,b){
        if(a-b < 0) return -1;
        if(a-b > 0) return 1;
        if(a == b) return 0;
    }

    funcion mayorMenor(a, b){
        if(b-a < 0) return -1;
        if(b-a > 0) return 1;
        if(b == a) return 0;
    }
 */

/*
console.log(numbers.sort((a,b) => b - a)); //aqio ordena del numero mayor al menor
*/
//-----------------------------------------------------

/*
    .forEach(callback(currentValue, [index])) - ejecuta la funcion indicada una vez por cada elemento del array
*/

/*
const numbers = [2,5,9,3,4,7];

numbers.forEach((number) => console.log(number)); //recorre el array numbers y guarda los elementos del array en number para despues imprimirlo

numbers.forEach((number, index) => console.log(`${number} esta en la posicion ${index}`));
*/

/*
    .some(callback) - comprueba si al menos un elemento del array cumple la condicion 
*/

/*
const palabras = ['HTML', 'CSS', 'JS', 'PHP'];

console.log(palabras.some(palabra => palabra.length > 8));

/*
    .every(callback) - comprueba si todos los elementos del array cumplen la condicion
*/
/*
console.log(palabras.every(palabra => palabra.length >= 3));
*/

/*
    .map(callback) - transforma todos los elementos del array y devuelve un nuevo array
*/
/*
const numbers = [2,5,9,3,4,7];

numbers.map((number => console.log(`multiplicacion:  ${number} x 2 = ${number * 2}`)));
*/

/*
    .filter(callback) - filtra todos lo elementos del array que cumplan la condicion y devuelve un nuevo array
*/

/*
const numbers = [2,5,41,9,3,4,7,500,99,];

const numbers2 = numbers.filter(number => number >= 10);

console.log(numbers2);

*/

/*
    .reduce(callback) - reduce todos lo elementos del array a un unico valor
*/

const numbers = [2,5,4,9,3,4,7,5,9,];

console.log(numbers.reduce((a,b) => a + b)); // devuelve un unico valor
console.log(numbers.reduce((a,b) => a - b));
console.log(numbers.reduce((a,b) => a * b));

const users = [
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: false
    },
    {
        name: 'user 3',
        online: true
    },
    {
        name: 'user 4',
        online: true
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    }
]

const userOnline = users.reduce((cont, user) =>{
    if(user.online) cont++; //valida la condicion y guarda enla variable cont
    return cont;
},0); //0 es el valor inicial de la variable cont

console.log(`hay: ${userOnline} usuarios conectados`);