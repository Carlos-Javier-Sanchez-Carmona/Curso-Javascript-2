//clases
// parametro y argumento son cosas distintas

class Persona{ // clase persona
    constructor(nombre, apellido, edad){ // construyendo la clase
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${edad} años`
    }

    // los metodos van fuera del constructor pero dentro de la clase
    saludar(){ // <= esto es una funcion
        return `Hola me llamo ${this.nombre} y tengo ${this.edad} años.`
    }
}

// instanciando un objeto

const juan = new Persona('Juan', 'Garcia', 25); // Objeto Juan

// con una sola clase se pueden crear muchas personas (objetos)

const maria = new Persona('Maria', 'Garcia', 45);

console.log(juan);
console.log(juan.saludar()); //invocando la funcion/metodo

console.log(maria);
console.log(maria.saludar());