/*
    Insertar y eliminar elementos II

    parent.insertBefore(newElement, referenceElement) - inserta un elemento antes del 
    elemento de referencia.

    SOPORTE TOTAL   
    parent.insertAdjacentElement(position, element)

    parent.insertAdjacentElement(position, html)
    parent.insertAdjacentElement(position, text)

    positions:
        beforebegin - antes de que empiece (hermano anterior)
        afterbegin - despues de que empiece (primer hijo)
        beforeend - antes de que acabe (ultimo hijo)
        afterend - depues de que acabe (hermano siguiente)
    
    parent.replaceChild(newChild, oldChild) - reemplaza un hijo por otro
 */

const list = document.getElementById('list'); //busqueda de elemento html por id
const newElement = document.createElement('li'); //creado un nuevo elemento de tipo li (lista)
newElement.textContent = "I'm a new element"; // agregando contenido de texto al elemento creado

//list.appendChild(newElement); // al usar appenChild, el elemento insertado se coloca en la ultima posicion sin importar la cantidad de hijos que haya

//list.insertBefore(newElement, list.children[1]); //al usar insertBefore y una referencia, en este caso la referecia es el indice de hijos que haya para colocarlo en el indice seleccionado
//el elemento list, tiene dos hijos con indice [0] y [1]
//el nuevo elemento ocupara el indice [1] y el elemento que tenia ese indice pasara a tener el indice [2]


//list.insertAdjacentElement('beforebegin', newElement); //aqui el nueco elemento insertado, se coloca como hermano

//list.children[0].insertAdjacentElement('beforebegin', newElement); //se indica como hijo de listo yq que tendra la posicion 0 del indice

//list.insertAdjacentElement('afterbegin', newElement);// aqui ya no es necesario usar children[], ya que la lista ha comenzado y se entiende que el elemento insertado es el primer hijo

//list.insertAdjacentElement('beforeend', newElement); // inserta el nuevo elemento en ultima posicion de la lista
//list.insertAdjacentElement('afterend', newElement); // inserta el nuevo elemento como el hermano siguiente
//list.children[0].insertAdjacentElement('afterend', newElement); //se tiene que usar children para que se inserte dentro de la lista


//-----------------------------------
//list.children[1].insertAdjacentHTML('afterend', '<li>elemento html</li>');// aqui se determina que tipo de elemento html se insertara
//list.children[1].insertAdjacentText('afterend', '<li>Elemento Html</li>'); //se inserta un string


//remplazar un hijo con otro

//list.replaceChild(newElement,list.children[2]); //se reemplaza el hijo de acuerdo a los parametros dados, usando children[0]

/*
    DOM manipulation convenience methods - JQuery lite
    https://caniuse.com/dom-manip-convenience

    position
        parent.before() - antes de que empiece (hermano anterior)
        parent.prepend()- despues de que empiece (primer hijo)
        parent.append() - antes de que acabe(ultimo hijo)
        parent.after() - despues de que acabe(hermano siguiente)
        
        child.replacewith(newChild)
 */

//list.before(newElement); lo inserta como hermano anterior
//list.children[0].before(newElement);// si se escribe sin el children el elemento quedara como hermano
//list.prepend(newElement); //lo inserta como primer hijo
//list.append(newElement); //lo inserta como ultimo hijo
//list.after(newElement); //lo inserta como hermano siguiente
//list.children[0].after(newElement);//lo inserta como hijo

//reemplazar
//list.children[0].replaceWith(newElement);//reemplaza el elemento hijo

//document.getElementById('son-2').replaceWith(newElement); //se reemplaza el elemento
//directamente desde el id del elemento


/*
    clonar y elimnar elemento
        element.cloneNode(true|false) - clona el nodo. 
        si le pasamos true clona todo el elemento con los hijos, si le pasamos false,
        clona solo el elemento sin hijos.
        element.remove() - elimina el nodo DOM
        element.removeChild(child) -elimina el nodo hijo del DOM

*/
//clonar

//console.log(list.cloneNode(true)); //clona el elemento y lo impreme en consola
//list.after(list.cloneNode(true)); //clona el elemento y lo inserta como hermano siguiente

//remover
//list.remove(); //elimina todo

list.removeChild(list.children[0]);// elimina al nodo hijo seleccionado
