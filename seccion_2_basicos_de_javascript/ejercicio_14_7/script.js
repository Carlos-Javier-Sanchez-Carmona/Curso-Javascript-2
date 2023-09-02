/*
    crea 3 arrays. el primero tendra 5 numeros y el segundo se llamara pares y el tercero
    impares, ambos estaran vacios. despues multiplica cada uno de los numeros el primer array
    por un numero aleatorio entre 1 y 10, si el resultado es par guarda ese numero en el
    array de pares y sio es impar en el array de impares. muestra por consola:
        -la multiplicacion que se produce junto con su resultado con el formato: 2 x 3 = 6
        -el array de pares e impares
*/

let numbers = [5,10,15,20,25];
let arrpar = [ ];
let arrimpar = [ ];
let result = 0;

for(let number of numbers){
    let random = Math.round(Math.random() *10 + 1);
    result = number * random;
    
    console.log(`${number} x ${random} = ${number*random}`);

    if(result % 2 === 0){
        arrpar.push(result);
    }else{
        arrimpar.push(result);
    }
}
console.log(`Array pares: ${arrpar}`);
console.log(`Array impares: ${arrimpar}`);