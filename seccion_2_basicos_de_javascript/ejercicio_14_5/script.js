/*escriba un programa que pída un numero entero mayor que cero y calcular 
su factorial el factorial es el recultado de multiplicar ese numero 
por sus anteriores hasta llegar a la unidad 

!5 = 5*4*3*2*1 = 120 

*/

let num = parseInt(prompt("Ingresa un numero"));
let resul = 1;

for(let i=num; i > 0; i--){
    resul *= i;
}

console.log(`el factorial de: ${num} es: ${resul}`);