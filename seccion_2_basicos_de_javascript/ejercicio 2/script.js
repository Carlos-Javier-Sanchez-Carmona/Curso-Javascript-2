/**Operadores matematicos */

let a = 4; /**Declaracion e inicializacion de variables */
let b = 5;
let usuario = 'Carlos';

/** Operaciones matematicas */
console.log(a+b); /**Suma */
console.log(a-b); /**Resta */
console.log(a*b); /**Multiplicacion */
console.log(a/b); /**Divicion */
console.log(a%b); /**Resto */

console.log("Bienvenido " + usuario); /**Concatenacion */


/**Operadoes de Asignacion */
let d  = 10;

d = d+3; /**valor: 13 */
console.log(d);
d -= 3; /**valor: 10 */
console.log(d);
d *= 3; /**valor: 30 */
console.log(d);
d /= 3; /**Valor: 10 */
console.log(d);
d %= 3; /**valor: 1 */
console.log(d);



/**Operadores de Decremento e incremento */

let c = 5;   /**valor inicial de la variable */

console.log(c++); /**se impreme el valor inicial de la variable para despues incrementarse, */
console.log(c); /**valor de la variable, 6 */
console.log(++c); /** primero el valor anterior se incrementa: 6+1 = 7, para despues imprimir su nuevo valor*/
console.log(c); /**el valor actual de la variable es de: 7 */
console.log(c--) /**se imprime el valor actual: 7, para posteriormente decrementar su valor */
console.log(c); /**valor de la variable: 6 */
console.log(--c); /**se decrementa el valor anterior: 6-1 = 5. quedando el valor actual de la variable en 5*/

