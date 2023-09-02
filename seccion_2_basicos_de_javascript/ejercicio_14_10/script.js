/*
    dado un array que contiene ["azul","amarillo","rojo","verde","rosa"] determinar 
    si un color introducido por el usuario a traves de un promt se encuentra dentro del array.

*/


let colores = ['azul','amarillo','rojo','verde','rosa'];
let color = prompt('Intruduce un color: ').toLowerCase();


if(colores.includes(color)){ //El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
    console.log(`el color: ${color}, se encuentra dentro del array`);
}else{
    console.log(`el color: "${color}", no se encuentra dentro del array`);
}

//-----------------------------

if(colores.indexOf(color) !== -1){
    console.log(`el color se encuentra dentro del array`);
}else{
    console.log(`el color no se encuentra dentro del array`);
}