//objeto evento

const form = document.getElementById('form');// se obtiene el id del elemento
const input = document.getElementById('input');
const button = document.getElementById('button');

/*
input.addEventListener('keyup', () => { // se agrega el evento escucha (evento del teclado)
    console.log(input.value);//imprime el valor del evento del teclado
})
*/
// e objeto evento

input.addEventListener('keyup', (e) => {// se activa al presionar un tecla dentro del elemento input  
    console.log(e);//se imprime el evento y se muestra toda su informacion
    console.log(e.key); //imprime el valor de la tecla pulsada (muy util en videojuegos)
});


/*
input.addEventListener('click', (e) => { // se activa cuando se da click sobre el input
    console.log(e);//imrpime toda la informacion del evento click
});
*/

button.addEventListener('click', (e) => { //
    console.log(e); //
    console.log(e.target); //impreme toda informacion del evento del elemento. no se despliega la informacion de manera correcta en todos los navegadores
});          //e.target, es el mas utlizado, debido a la gran cantidad de informacion que devuelve.

form.addEventListener('submit', (e) => { //el evento submit envia los datos y recargar la pagina
    e.preventDefault(); // con este metodo se desabilita el evento por default, evita que se recargue la pagina
    console.log('el formulario se ha enviado');
})