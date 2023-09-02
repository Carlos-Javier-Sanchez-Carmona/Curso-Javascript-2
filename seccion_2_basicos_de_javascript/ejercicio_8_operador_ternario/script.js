//operador ternario "?"
//(condicion) ? true : false

//(condicion) ?
        //(primera sentencia,
        //segunda sentecia)
        //:
        //(primera sentencia
        //segunda sentecia)

// numero par. un numero es par, cuando su modulo o resto es 0
// el modulo de un numero se saca con el %

let num = 5;
            // si num es par
(num % 2 == 0) ? console.log(`${num} es par`) : console.log(`${num} no es par`); 
//menor uso de lineas comparado con un if-else

(num % 2 == 0) ?
    (
        console.log(`${num} es par`),
        console.log(`${num} es numero par`)
    )
    : 
    (
        console.log(`${num} es impar`)
    )