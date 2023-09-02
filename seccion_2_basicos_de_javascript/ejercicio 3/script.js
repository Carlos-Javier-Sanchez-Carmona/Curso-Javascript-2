/*Strings */
/*Propiedades */

let cadena = "  Hola Mundo   ";

/*length: devuelve la longitud de la cadena, injcluye espacios vacios */

console.log(cadena.length);


/*Metodos*/
/*Todos los metodos devuelven una cadena nueva, la cadena original no se modifica */
/*toUpper Case() : devuelve la cadena a mayusculas*/

console.log(cadena.toUpperCase());
let cadenaMayus = cadena.toUpperCase(); /**guardando el nuevo valor de la cadena en una 
nueva variable */
console.log(cadenaMayus);
/*toLower Case() : devuelve la cadena a minusculas */

console.log(cadena.toLowerCase())

/*indexOf(string) : devuelve la posicion en la que se encuentra un string, 
si se busca una palabra, devolvera la posicion de la primera letra de la palabra,
al igual que si solo se busca una letra, si no la encuentra devolvera -1*/

console.log(cadena.indexOf("2")); /**No encontrado */
console.log(cadena.indexOf("Hola")); /**Encontrado, inicia en la posicion 0 */
console.log(cadena.indexOf("o")); /**Encontrado, inicia en la posicion 1 */
console.log(cadena.indexOf("h")); /**No encontrado */

/**replace(valor a buscar, valor nuevo) : busca y remplaza un fragmento de la cadena*/

console.log(cadena.replace('Mundo', 'Carlos'));

/**substring(inicio[fin]) extrae los caracteres desde el inicio hasta el final; el final; 
no se incluye, si no se incluye el fin, extrae hasta el final*/

console.log(cadena.substring(3));
console.log(cadena.substring(3,9));
console.log(cadena.substring(9));

/**slice(inicio[,fin]) : es igual que subsring pero admite valores negativos, si
ponemos valores negativos empezara desde atras, si no se incluye final, extrae el final*/

/**(2,4) : empieza a contar en el tercer caracter y los 4 ultimos no los considera*/

console.log(cadena.slice(0,6));
console.log(cadena.slice(-2));
console.log(cadena.slice(9));

/**trim() : elimina los espacios vacios al inicio y al final de la cadena*/

console.log(cadena.trim());

let cadena2 = "  Estamos trabajando con cadenas de texto  ";
console.log(cadena2.trim());

/**ES6 */

/**startsWith(valor[,inicio]) : sirve para saber si la cadena comienza con ese valor,
devuelve true o false*/

console.log(cadenaMayus.trim().startsWith('H')); /**borra los espacios vacios al inicio y 
comprueba que inicia con el valor dado*/

console.log(cadenaMayus.trim().startsWith('h'));

console.log(cadenaMayus.trim().startsWith('H,4')); /**busca el valor a partir de 
la posicion 4, al no encontrar ese valor, devolvera false*/


/**endsWith(valor[,logitud]) : sirve para saber si la cadena termina con ese valor.
 devolvera true o false*/

 console.log(cadenaMayus.trim().endsWith('O'));

 console.log(cadenaMayus.trim().endsWith('O',2));

 console.log(cadenaMayus.trim().endsWith('MUNDO'));

 /**includes(valor[,inicio]) : igual que indexOf pero devuelve true o false */

 console.log(cadena2.trim().includes('r'));
 console.log(cadena2.trim().includes('r',9));

 /**repeat(valor) repite el string el numero de veces que le indiquemos */
 console.log(cadena2.repeat(4));
 

 /**template strings */

 let nombre = 'Juan';
 let apellido = 'Gomez'; 
 let edad = 20;

 console.log("Hola " + nombre + " " + apellido + ". Tienes " + edad + " Años."); /**sin
 template string */

 console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`); /**con template
 string*/

 console.log(`Hola ${nombre} ${apellido}. Tienes ${edad + 1} años.`); /**https://www.w3schools.com/jsref/jsref_obj_string.asp */