/*
    determinados

    bucle for of / for in

    for(let variable of estructura){
        codigo a ejecutar
    }

    el bucle for of: se usa para acceder a los elemtos contenidos dentro de un array.

    palabras reservadas de bucles

        break - rompe el bucle
        continue - se salta la(s) posicion(es)
        que le indiquemos y depues continua
        su ejecucion

    -----------------------------------
    for(let variable in estructura){
        codigo a ejecutar
    }

    el bucle for in accede a los indices de los elementos contenidos dentro de un array
*/

 let names = ['Paco', 'Jose', 'Paula', 'Maria'];


for(let i = 0; i < names.length; i++){ // se inicializa la variable i, se indica la condicion, que tiene que se menor a la longitud de array a recorrer
    if(names[i] ==='Paula'){// los tres signos de igual, indican igualdad estricta.
        //break //cuando el ciclo compara el elemento, detiene el ciclo sin imprimir a este elemento
        continue //continua el ciclo pero no imprime el elemento de la condicion
    }
    console.log(names[i]);
}

for(let index in names){
    if(names[index] === 'Paula'){
        continue
    }
    console.log(index);
}

console.log(names['']);

/*
 for(let name of names){ // se inicializa la variable "name" que en cada ciclo accedera a un elemento dentro del array hasta haberla recorrido toda
    console.log(name); // se imprime el elemento del array guardado en la variable name despues de cada ciclo
 }

for(let index in names){ //se imprime el indice de los elementos del array
    console.log(index)
}
*/