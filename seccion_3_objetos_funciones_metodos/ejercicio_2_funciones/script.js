//Funciones


// declarando una funcion
/*
    function nombreFuncion(parametro){
        return parametro;
    }
*/


/*
function saludar() {
    console.log("Hola, soy una funcion.");
}

// para mostrar el contenido de la funcion es necerario invocarla

saludar(); // asi es como se invoca una funcion
*/

//declarando funciones con la forma actual
// const nombreFuncion = (parametro) => parametro
/*
const saludar = () => console.log("Hola, soy una funcion"); // no se usan llaves ya que solo hay una cosa que hacer, funcion flecha.
saludar(); // invocando funcion

const saludarUser = (user = prompt("Ingresa tu Nombre: ")) => console.log(`Hola ${user}`);
saludarUser();
*/

/*
let num1 = parseInt(prompt("introduce un numero: "));
let num2 = parseInt(prompt("introduce un numero: "));
*/

const suma = (num1, num2)  =>{ // cuando se usan las llaves se entiende que se usara mas de una linea de codigo
    num1 + num2; // si se ejecuta de esta manera, ni imprimira nada, por que esta esperando un "return"
    return num1 + num2; // aqui se ejecuta de manera satisfactoria
}

console.log(suma(2,2)); 

//--------------------------------

const suma2 = (num1, num2) => num1 + num2;

console.log(suma2(2,2));