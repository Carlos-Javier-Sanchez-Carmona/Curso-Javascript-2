// Introduccion a objetos en javascript
// los objetos van con llaves
// los arrays van corchetes o llaves cuadradas

/*
const person = { // nombre del objetos
    name: 'Juan', // propiedades, y separacion con coma.
    age: 26,
    sons: ['Laura', 'Diego'] //arrays
}

console.log(person); //imprimiendo el objeto en la consola

console.log(person.name); // accede a la propiedad "name" del objeto "person"
console.log(person['name']); // accede a la propiedad "name"


for(const key in person){ // el bucle recorre el objeto
    console.log(key); // imprime las claves (key) dentro del objeto pero no el contenido de cada clave
}

for(const key in person){
    console.log(person[key]); // imprime el contenido de cada clave (key)
}
*/

//objeto

/*
const person = { // nombre del objetos
    name: 'Juan', // propiedades, y separacion con coma.
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomas'] //arrays
}
*/
/*
for(const son in person.sons){ // se accede al indice del array "sons"
    console.log(son); //se guarda cada iteracion en la variable "son"
}

for(const son of person.sons){ // se accede a los valores del array "sons"
    console.log(son);
}
*/

/*
for(const son of person){ //aqui se accede al objeto, pero se genera un error, ya que no es iterable
    console.log(son);
}
*/


const person = { // nombre del objetos
    name: 'Juan', // propiedades, y separacion con coma.
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomas'] //arrays
}

//imprimiemdo contenido del objeto

console.log(`Hola ${person.name}, tienes ${person.age}, tus hijos se llaman: ${person.sons.join(' - ')}`);
// se accede a cada propiedad del objeto, con ".join()" se agrega un caracter para separar los valores de del array