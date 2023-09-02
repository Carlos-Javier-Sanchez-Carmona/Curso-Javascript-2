/*
    solicitar un nombre, edad y mostrar por consola el mensaje: "Hola _______, tiemes ________
    años y el año que viene tendras _______ años".
    realiza el ejercicio con prompt(mensaje) y haz uso de template strings
*/

let nombre = prompt("Introduce tu nombre: ");
let años = Number.parseInt(prompt("Introduce tu edad: ")); //NumberparseInt para pasarlo como numero entero y evitar que lo maneje cono string


console.log(`Hola ${nombre}, tienes ${años} años, y el año proximo tendras: ${años + 1} años`);
