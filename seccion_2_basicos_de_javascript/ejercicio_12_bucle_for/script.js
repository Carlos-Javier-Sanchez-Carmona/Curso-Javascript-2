/* Bucles*/

/*
    determinados

    bucle for

    su sintaxis se compone de 3 partes
    iniciacion de variable
    numero de vuelta o ciclos
    incremento o decremento

    for (let i=0; i<=10; i++){
        codigo a ejecutar
    }

*/


for(let i = 0; i <= 10; i++){ // se inicializa i en 0, ira aumentando hasta llegar a cumplir la condicion
    console.log(i); //se imprime la variable, se analiza la condicion y despues se incrementa, terminando asi el primer ciclo 
}                  //


for(let j = 10; j >= 0; j--){ // se inicializa en 10, ira decrementando hasta cumplir la condicion
    console.log(`El resultado es: "${j}"`);
}


let numbers = [540,561,232,283,484,955]; // array
let result = " ";

for( let h = 0; h < numbers.length; h++){ // el numero de ciclos lo determina la longitud del array
    console.log(`multiplicacion de: ${h} * ${numbers[h]} es: `, result =  h * numbers[h])
}