//Objetos nativos

const button = document.getElementById('button');

/*
    objetos window - es el objeto global, de el descienden todos los objetos
        alert()
        prompt()
        confirm()
*/
//alert('Hola!');

//window.alert('Hola!'); //puede escribirse con window o sin el.

//prompt('Escriba su nombre'); //estos metodos no se recomienda unsarlos por que interrumpen la carga de la pagina
//confirm('Confirmar'); //es tipo booleano, dado que devuelve true o false
/*
if(confirm('Aceptar')){
    console.log('El usuario acepto');
}else{
    console.log('El usuario no acepto');
};
*/

/*
addEventListener('click', (e) => { //el evento lo asocia a window, que es toda la pagina
    console.log(e)
})
*/
/*addEventListener('load', (e) => {
    console.log(e, 'se ha cargado la pagina');
})
*/
/*
addEventListener('scroll', (e) => { //este evento se activa cuando el usuario se desplaza hacia arriba o abajo 
    console.log(e);
})
*/


/*
    objeto console - es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/doc/web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table
*/

/*
const array = [1,2,5,6,7,9,6,4];

console.log(button);
console.dir(button); //despliega mas informacion en caso de que console.log() solo imprima una linea

const person = {
    name: 'Javy',
    age: 25,
    email: 'javy@gmail.com'
}

console.log(person);

console.table(person); //imprime el contenido de la constante en una tabla, lo que facilita su lectura

console.table(array);
*/

/*
    Objeto Location - es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/web/api/location
    location.href
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload()
*/
/*
console.log(location.href); //imprime la la direccion de la barra de direcciones
console.log(location.protocol); //imprime el tipo de protocolo usado, http, https, ftp.
console.log(location.host); //dominio principal
console.log(location.pathname); //impreme el directorio de la pagina
console.log(location.hash); //pasa parametros entre paginas
//console.log(location.reload()); //para recargar la pagina, se usa en if-else
location.href = 'https://www.google.com'; //puede usarse asi para redirigir a otros sitio
*/

/*
    Objeto history
    https://developer.mozilla.org/es/docs/dom/manipulando_el_historial_del_navegador
    back() - ir para atras
    forward() - ir hacia adelante
    go(n|-n)

    length
*/

//history.back(); regresa una pagina en el historial 
//history.forward(); avanza una pagina hacia adelante
//history.go(1); avanza una pagina o mas hacia adelante, segun sea el caso, depende del length 
//history.go(-1); avanza una o mas paginas hacia atras.

/*
    objeto date
    https://developer.mozilla.org/es/docs/web/javascript/referencia/objetos_globales/date

    https://wwww.w3schools.com/jsref/jsref_obj_date.asp
*/

//const date = new Date(); // se tiene que instanciar para poder usar sus metodos
//
//console.log(date.getDay()); // 1 representa lunes, ya que el dia de inicia de semana es domingo siendo 0
// lo mismo para los meses, enero 0 - diciembre 11, se basa en el calendario anglosajon.
//
//console.log(date.getDate()); //7 representa el dia del mes en curso
//
//console.log(date.getFullYear()); 
//
//console.log(date.getTime());
//
//console.log(date.prototype.getFullYear());

/*
    Timers
        Timeout
        https://developer.mozilla.org/en-US/docs/web/api/windoworworkerglobalscope/settimeout

        setTimeout{() => {code}, delay-in-miliseconds} - hace que se ejecute la funcion despues
        de delay(retraso). si lo referenciamos mediante una variable/constante podemos porarlo con
        clearTimeout(referencia)

        interval
        https://developer.mozilla.org/en-US/docs/web/api/windoworworkerglobalscope/setinterval

        setInterval{() => {code}, delay-in-miliseconds} - hace que se ejecute la funcion cada
        delay milisegundos. si lo referenciamos mediante una variable/constante podemos pararlo 
        con clearInterval(referencia)

*/

/*
button.addEventListener('click', () => {
    setTimeout(saludar, 3000); //se acribe asi cuando la funcion es externa
    //setTimeout(() => {
    //    console.log('adios')
    //}, 3000);
})
*/

/*
const timeout = setTimeout(() => { // se inicia el time out
    console.log('Adios')
}, 3000); //delay de 3000 milisegundos

button.addEventListener('click', () => { //con este evento se detiene el timeout
    clearTimeout(timeout);
});
*/
const saludar = () => { //funcion saludar
    console.log('Hola!')
}

//const interval = setInterval(saludar, 3000); // cada 3 segundos se imprime la funcion saludar en consola

let cont = 0;

const interval = setInterval(() => {
    console.log(cont); //lleva el conteo de cada vez que se imprime
    cont++;
}, 3000); //cada 3 segundos

button.addEventListener('click', () => {
    clearInterval(interval);
    console.log('se ha detenido');
})