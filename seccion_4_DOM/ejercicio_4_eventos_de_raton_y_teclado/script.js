//eventos de raton y teclado
/*
    eventos de raton
    click - cuando pulsamos el boton izquierdo del raton
    doubleclick - cuano pulsamos dos veces seguidas el boton izquierdo del raton
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona qye tiene el evento
    mousedown - cuanso pulsamos no soltamos el boton izquierdo del raton
    mouseup - cuando soltamos el boton izquierdo del raton
    mousemouve - cuando movemos el raton

    eventos del teclado
    keydown _ cuando pulsamo una tecla
    keyup - cuando soltamos la tecla
    keypress - cuando pulsamos la tecla y no soltamos
 */


const button = document.getElementById('button');
const box = document.getElementById('box');
const input = document.getElementById('input');


button.addEventListener('click', () => { // se grega el evento del elemento
    console.log('has dado click');// elemento button de html seleccionado
});


button.addEventListener('dblclick', () => {
    console.log('has dado doble click');
});


box.addEventListener('mouseenter', () => {
    box.classList.replace('red', 'green'); // se busca la clase dentro del elemento y se remplaza por otra clase
    console.log('has cambiado a verde'); // se impreme en consola el evento
});//el color se define desde css, con las clases asignadas en el elemento html

/*
box.addEventListener('mouseenter', () => {//elemento div del html
    box.style.background = "black"; //cambio de fondo
    console.log('haz entrado');// imprimiendo el evento en consola
});
*/

box.addEventListener('mouseleave', () => {
    box.classList.replace('green', 'red');
    console.log('has cambiado a rojo');
});
/*
box.addEventListener('mouseleave', () => {
    box.style.background = "aqua";
    console.log('haz salido');
});
*/


button.addEventListener('mousedown', () => { //este evento es ideal para usarlo con la API drag and drop
    console.log('has pulsado el boton');
});

button.addEventListener('mouseup', () => {
    console.log('has soltado el boton');
});

button.addEventListener('mousemove', () => {
    console.log('has movido el raton ;-)');
});

box.addEventListener('mousemove', () => {
    console.log('estas moviendo el raton');
});


//eventos de teclado



input.addEventListener('keydown', () => {
    console.log('has pulsado una tecla');
});

input.addEventListener('keyup', () => {
    console.log('has soltado una tecla');
});

input.addEventListener('keypress', () => {
    console.log('estas pulsado una tecla');
});