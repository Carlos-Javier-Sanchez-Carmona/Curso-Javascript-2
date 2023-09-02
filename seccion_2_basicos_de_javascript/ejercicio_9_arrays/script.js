//array

// let array = [] - array vacio
// let array = [1,2,3,4] - array con contenido inicial

let numeros = [1,2,3,4,5];

console.log(numeros.length); //longitud del array
console.log(numeros); //imprime todo el contenido del array
console.log(numeros[0]); //imprime el indice del array

console.log(numeros[0] + numeros[3]); //suma de dos elementos dentro del array
// resultado de la suma: 5

let palabras = ['hola', 'estamos', 'programando', 'arrays'];

console.log(palabras.length); //longitud del array: 4
console.log(palabras[1] + ' ' + palabras[2]); // imprime la palabra: estamos y programando
console.log(`la palabra: "${palabras[2]}", tiene ${palabras[2].length} letras.`); //usando template strings
//busca al elemento ubicado en el indice 2 y saca su longitud