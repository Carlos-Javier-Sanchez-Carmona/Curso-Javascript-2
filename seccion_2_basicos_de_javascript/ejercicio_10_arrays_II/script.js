//arrays: metodos y propiedades

let numeros = [1,2,3,4,5,1];
let num = 5;

/*
    arrays - propiedad
        .lenght - devuelve el numero de posisciones que contiene el array.
*/

console.log(numeros.length); //longitud del array: 5


/*
    array - metodos
        array.isArray() - devuelve si true la variable es un array
*/

console.log(Array.isArray(numeros)); //esto es un array
console.log(Array.isArray(num)); // esto no es un array

/*
    eliminar un elemento
        .shift() - elimina el primer elemento del array y devuelve ese elemento
        .pop() - elimina el ultimo elemento del array y devuelve ese elemento
*/

//console.log(numeros); // se imprimen todos los elementos del array [1,2,3,4,5]
//numeros.shift(); // se elimina el primer elemento del array [1]
//console.log(numeros); // se imprime el array [2,3,4,5]


//console.log(numeros); // se imprimen todos lo elementos del array [1,2,3,4,5]
//let numborrado = numeros.pop() // se elimina el ultimo elemento del array, al mismo tiempo el elemento borrado se guarda en una nueva variable
//console.log(numeros); // se imprime el array [1,2,3,4]
//console.log(numborrado); // se imprime el elemento borrado del array


/*
    añadir elementos al array
        .push(element1, element2,...) - añade uno o mas elementos al final del array y devuelve la nueva longitud
        .unshitf(element1, element2,...) - añade uno o mas elementos al principio del array.
*/

//console.log(numeros); // se imrpime el array [1,2,3,4,5]
//let newArray = numeros.push(6); // se añade un elemento al final del array
//console.log(numeros) // se imprime el array con su nueva longitud, [1,2,3,4,5,6]

//let newarray2 = numeros.unshift(0);// se añade un elemento al inicio del array
//console.log(newarray2);
//console.log(numeros); //se imprime el array con su nueva longitud [0,1,2,3,4,5,6]

/*
    .indexOf() - devuelve el primer indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado
*/
console.log(numeros.indexOf(2)); //array [1,2,3,4,5,6] - el numero 2 se encuentra en el indice 1.
console.log(numeros.indexOf(0)); // el resultado es -1, ya que no encontro al 0 en el array

/*
    .lastIndexOf - devuelve el ultimo indice del elemento que coincida con el valor espeficicado, o -1 si ninguno es enontrado 
*/
console.log(numeros);
console.log(numeros.lastIndexOf(1)); // el elemento buscado esta el la posicion 5, [1,2,3,4,5,1]
/*
    .reverse() - invierte el orden de los elementos del array
*/
let numero2 = [0,1,2,3,4,5,6];

console.log(numero2); // se imprime el array original [0,1,2,3,4,5,6]
console.log(numero2.reverse()); // se imprime el array con el orden invertido [6,5,4,3,2,1,0]


/*
    .join(separador) - devuelve un string con el separador que indiquemos "-", "*".
*/

console.log(numero2.join(" - ")); //imprime el array con separadores entre los elementos [6-5-4-3-2-1-0]
console.log(numero2.join(" * ")); //imprime el array con separadores entre los elementos [6*5*4*3*2*1*0]
console.log(numero2.join(" : ")); //imprime el array con separadores entre los elementos [6:5:4:3:2:1:0]

/*
    .splice(a,b,items) - cambia el contenido del un array eliminando elementos exitentes y/o agregando nuevos elementos
    a - indice de inicio
    b - numero de elementos (opcional)
    items - elementos a añardir en caso de que se añadan (opcional)
*/

console.log(numero2);
//numero2.splice(3); // elimina desde la posicion 3 hasta el final
numero2.splice(2,2); // elimina 2 elementos a partir del indice de inicio indicado. array original [6 5 4 3 2 1 0], nuevo array [6 5 2 1 0] 
                    //                                                                              0 1 2 3 4 5 6
console.log(numero2);
numero2.splice(1,1,10,12,13); // se elimina el elemento del indice 1 y apartir de ahi se añaden los nuevos items
console.log(numero2);

numero2.splice(1,0,10,12,13)// si el numero de elmentos es 0, no se eliminara ningun dato del array
console.log(numero2);

/*
    .slice () - extrae elemetos de un array desde el indice a, hasta el indice b.
    si no existe b lo hace hasta el final del array, y en caso de que no existan a y b, hace una
    copia del original. 
*/

//let newnumber = numeros.slice(); // aqui no existe indice a ni b.
//console.log(numeros);
//console.log(newnumber);

//let newnumber = numeros.slice(2); // aqui solo esta el indice a
//console.log(numeros);
//console.log(newnumber);

let newnumber = numeros.slice(2,3); //aqui se usan ambos indices
console.log(numeros);
console.log(newnumber);
