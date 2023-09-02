/**
 *  spread operator (operador de expansion)
 *  su sintaxis es ...
 */


//const numbers = [-12,3,2,23,46,8,9];

//console.log(...numbers);

//envia elementos de un array a una funcion
/*
const addNumbers = (a,b,c) =>{ //funcion
    console.log(a+b+c);
}

addNumbers(1,2,3); //suma los numeros

let numbersToAdd = [1,2,3];

addNumbers(...numbersToAdd); // agregando el (...) spread operator se envian los elementos de array numbersToAdd a la funcion addNumbers
*/

//añadir un array a otro array
/*
let users = ['javier','david','rosa','juan','mercedes','oscar'];

let newUsers = ['martha','jaime','laura'];

users.push(...newUsers); // los elementos a un array de manera mas rapida, se puede combinar con metodos de array para agregar al principio, al final o desde una posicion (indice) de inicio determinado

console.log(users);
*/

//copiar arrays
/*
let arr1 = [1,2,3,5,4];
let arr2 = [...arr1]; //agregando el spread operator para copiar el contenido de un array a otro array

console.log(arr1);
console.log(arr2);
*/

//concatenar arrays
/*
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8];

let arrConcat = arr1.concat(arr2); // usando concat
console.log(arrConcat);

let arrConcat2 = [...arr1, ...arr2]; //usando el spread operator
console.log(arrConcat2);
*/

//enviar un numero indefinido de argumentos a una funcion (parametros REST)
/*


const restParms = (...numbers) => {
    console.log(numbers);
}

restParms(); imprime un array vacio
*/

//libreria Math

const number = [-12,2,3,23,43,2,3];

console.log(Math.max(number)); //math no puede recorrer el array

console.log(Math.max(...number)); //agregando el spread operator se puede recorrer el array
console.log(Math.min(...number)); 


//eliminar elementos duplicados

console.log(new Set(number));

console.log([... new Set(number)]); // para crear un nuevo array sin elementos duplicados