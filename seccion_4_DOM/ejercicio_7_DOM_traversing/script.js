//Recorrer el DOM

/*
    Padre - parent (nodo del que desciende)
        -parenteNode - devuelve el nodo padre (que puede no ser un elemento)
        -parentElement - devuelve el nodo elemento padre

        NOTA
        los nodos del tipo Document y DocumentFragment nunca van a tener 
        un elemento padre, parentNode devolvera simpre null.

            propiedades
    Hijos - child (nodo que desciende del padre)
        - childNodes - devuelve todos los nodos hijo
        - children - devuelve todos los nodos elementos hijos
        - firtsChild - devuelve el primer nodo hijo
        - firstElementChild - devuelve el primer nodo elemento hijo
        - lastChild - devuelve el ultimo nodo hijo
        - lastElementChild - devuelve el ultimo nodo elemento hijo

            metodo
        - hasChildNodes() - devuelve true si el nodo tiene hijos y false si no tiene

    Hermanos - siblings (nodo al mismo nivel)
        - nextSibling - devuelve el siguiente nodo hermano (busca hacia abajo)
        - nextElementSibling
        - previousSibling (busca hacia arriba)
        - previusElementSibling

    Cercano
        - closest(selector) - selecciona el nodo mas cercano que cumpla
        con el selector, aun experimental.

*/

const parent = document.getElementById('parent'); // id del elemento
/*
//console.log(parent.parentNode); // en este caso nav seria el elmento padre
console.log(parent.parentElement); // en este caso nav seria el elemento padre
console.log(parent.parentElement.parentElement); //sube hacia los elementos arriba del padre
console.log(parent.parentElement.parentElement.parentElement); // en este caso ya no hay mas elementos para seguir subiendo por lo que el resultado es null

console.log(parent.childNodes); //devuelve todos los nodos hijo, incluidos saltos de linea
console.log(parent.children); //devuelve todos los elementos nodo hijos
console.log(parent.children[2]); //se accede al elemento hijo en el indice 2

console.log(parent.firstChild); //aqui se impreme un salto de linea, debido a la sintaxis que lleva, ya que es un nodo
console.log(parent.firstElementChild); //imprime el primer elemento hijo
console.log(parent.lastChild);// aqui tambien sale un salto de linea
console.log(parent.lastElementChild);// imprime el ultimo elemento hijo
console.log(parent.hasChildNodes()); //verifica si el elemento tiene hijos
console.log(parent.firstChild.hasChildNodes()); 
*/

console.log(parent.nextSibling); //aqui ubica e impreme la informacion de un salto de linea, ya que no hay otro elemento a su nivel
console.log(parent.nextElementSibling); // aqui imprime null, ya que no el elemeto ul no tiene elementos hermanos a su nivel
console.log(parent.parentElement.nextElementSibling);// aqui se accede al elemento padre del ul, que para este caso seria nav y se busca a su hermano hacia abajo, que seria el scrip js
console.log(parent.previousSibling);//aqui tambien sale la informacion de un salto de linea, ya que es el unico que esta a nivel del ul
console.log(parent.parentElement.previousElementSibling); // aqui se ubica el elemento padre que seria nav y se busca su anterior hermano que seria el h1, ya que ambos son hijos del body



