/**Condicionales */

let num = 0;
let num2 = 0;

/**Condicional simple 
 * 

if(num > 0){
    console.log(`${num} es mayor que 0`)
}

/**condicional compuesta 
 * 


if(num > num2) {
    console.log(`${num} es mayor que ${num2}`); //usando template string
}else{
    console.log(`${num} no es mayor que ${num2}`)
}
*/

/**condicional multiple 
 * 


if(num > 0) {
    console.log(`${num} es mayor que 0`);
}else if(num < 0){
    console.log(`${num} no es mayor que 0`)
}else{
    console.log(`${num} es igual que 0`)
}
*/
/**Operadores logicos */
//&& AND
// || or 

//** 
//if(num > 0 && num2 > 0){
//    console.log(`${num} y ${num2} son mayores que 0`) /**se tienen que cumplir ambas
        //condiciones para imprimir el mensaje */
//}
//if(num > 0 || num2 > 0){
  //  console.log(`${num} y ${num2} son mayores que 0`) /**aqui es solo es necesario que
    //se cunpla una condicion para imprimir el mensaje */ 
//} 

/**Anidar IF */

if(num > 0){
    if(num2 > 0){
        console.log(`${num} y ${num2} son mayores que 0`)
    }else if(num2 < 0){
        console.log(`${num} es mayor que 0 y ${num2} es menor que 0`)
    }else{
        console.log(`${num} es mayor que 0 y ${num2} es igual que 0`)
    }
}else if(num < 0){
    if(num2 > 0){
        console.log(`${num} no es mayor que 0 y ${num2} es mayor que 0`)
    }else if(num2 < 0){
        console.log(`${num} y ${num2} son menores que 0`)
    }else{
        console.log(`${num} es menor que 0 y ${num2} es igual que 0`)
    }
}else{
    if(num2 > 0){
        console.log(`${num} es igual que 0 y ${num2} es mayor que 0`)
    }else if(num2 < 0){
        console.log(`${num} es igual que 0 y ${num2} es menor que 0`)
    }else{
        console.log(`${num} y ${num2} son iguales que 0`)
    }
}

