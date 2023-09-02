/**Bucles */

/*
    indeterminados - no se conoce el numero de veces que se ejecutara el codigo

    bucle while

    while(condicio){
        codigo a ejecutar
    }

    bucle do while
    
    do{
        codigo a ejecutar
    }while(condicion)

*/

/*
let pass = 'hola'; // si pass ya tiene dato el bucle while no se ejecuta y bucle do while si.

while(pass != 'hola'){ // primero se analiza si pass es diferente o igual a hola, si no es igual se incia el ciclo, si es igual se ignora y se acaba el ciclo
    pass = prompt('Introduce tu contraseña') // prompt es para pedir al usuario introducir datos
} //el bucle se detiene una vez se cumpla la condicion

console.log('fin del bucle');

do{
    pass = prompt('introduce tu contraseña'); //primero pide la contraseña para despues comparar si es igual o diferente. este bucle se ejecuta al menos una vez
}while(pass != 'hola')

console.log('fin del bucle');
*/

let i = 0; // valor inicial de i es cero

do{
   console.log("Valor de i es: " + i); // 
   i = i + 1; // el ciclo comienza sumando 1 a la variable i, al mismo tiempo guarda ese valor para sumarlo asi mismo, primera suma: 0 + 1 = 1 + 1, etc
}while(i <= 50);


//factorial

let x = 3;
let j = x - 1;

while(j > 1){
    x *= j;
    j--;
}console.log(x)