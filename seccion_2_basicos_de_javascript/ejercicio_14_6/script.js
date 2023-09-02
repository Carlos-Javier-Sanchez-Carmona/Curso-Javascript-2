/*
    escriba un programa que permita ir introducendo una serie indetermada de numeros
    mientras su suma no supero 50. cuando esto ocurra se debe mostrar el total acumulado
    y el contador de cuantos numeros fueron introducidos
*/


let contador = 0;
let suma =0;



while(suma <50){
    suma = suma + parseInt(prompt('introduce un numero'));
    contador++;
    if(suma === 50){
        console.log(`la suma total es: ${suma}, elementos sumados ${contador}`);
    }else(
        console.log('limite de suma alcanzado,')
    )
}





