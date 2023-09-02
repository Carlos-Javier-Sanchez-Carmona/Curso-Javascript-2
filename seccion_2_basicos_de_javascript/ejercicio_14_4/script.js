/*
    escribir un programa que pida un numero entero mayor a 1 y que escriba
    si el numnero es primo o no.
    los numeros primos son aquellos que solo son divisibles por si mismos y la unidad
*/

let num = Number.parseInt(prompt("introduce un numero:"));
let divisores = 0;

if(num === 1) console.log("el numero 1 no es valido")
else{
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            console.log(`${num} / ${i} = ${num/i} no es primo`);
            divisores++
            break;  
        }
    }
}
if(divisores == 0) console.log(`${num} es primo`);


/*
    Los números primos del 1 al 200 son:
     

{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 
67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 
139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199}

Ver más en Brainly.lat - https://brainly.lat/tarea/103402#readmore
*/
/*
for (let i = 2; i <= num; i++) {
    let esprimo = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            esprimo = false;
            break;
        }
    }
    if (esprimo) {
        console.log(i + " es primo");
    } else {
        console.log(i + " no es primo");
    }
}
*/