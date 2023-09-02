/**Objeto math */
//objeto estatico

/**se tiene que usar su nombre para usarlo, ademas de 
 * que Math se tiene que escribrir con la M mayuscula*/

/**propiedades:
 * Math.E - Math.PI*/


/**Metodos*/



let num = 3.8;

/**Math.abs(x) - devuelve el valor absoluto de x */

console.log(Math.abs(num));

/**Math.ceil(x) - devuelve el entero mas grande mayor o igual que un numero */

console.log(Math.ceil(num));

/**Math.floor(x) - devuelve el entero mas pequeño mayor o igual que un numero */

console.log(Math.floor(num));

/**Math.pow(x,y) - devuelve la potencia de x elevado a la y */

console.log(Math.pow(num,2));

/**Math.random() - genera un numero psedoaleatorio entre 0 y 1 */
console.log(Math.random());
console.log(Math.round(Math.random()*100)); //para obtener un numero entre 0 y 100

//console.log(Math.round(Math.random() * (max - min)+min)), para obtener numeros aleatorios, pero en valor minimo nunca saldra

console.log(Math.round(Math.random()*(100 - 0)+0));
/**Math.round(x) - devuelve el valor de un numero redondeado al valor entero mas cercano */

console.log(Math.round(num));

/**math.sing() - devuelve el signo del numero*/

console.log(Math.sign(num));

/**Math.sqrt() - devuelve la raiz cuadrada de x */

console.log(Math.sqrt(num));