//DOM - Crear e insertar elementos 

/*
    crear un elemento: document.createElement(element)
    escribir texto en un elemento: element.textContent = texto
    escribir HTML en un elemento: element.innerHTML = codigo HTML

    añadir un elemento al DOM: parent.appendChild(elememt)
    fragmento de codigo: document.createDocumentFragment()
*/

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

const title = document.getElementById('title'); //id del elemento h1
const daysList = document.getElementById('daysList'); //id del elemento ul (unorder list/ lista desordenada)
const selectDays = document.getElementById('daysSelect');//id del elemento select (cuadro de seleccion)



//creando un elemento

//const itemList = document.createElement('li'); // se crea el elemento html y se guarda en una constante
//itemList.textContent = 'Lunes'; //se agrega contenido de texto al elemento
/*
console.log(itemList); // se imprime la constante que contiene al elemento creado

//añadiendo un elemento al DOM

daysList.appendChild(itemList); // se ubica el id del elemento al cual se va añadir
//se añade contenido al elemento ul con el id daysList

//
//title.textContent = `DOM - <span>Crear e insertar elementos I</span>`;//con textContent se trata como un string por lo que <span> no quedaria como parte del texto y no como elemento 
//en este caso se precisa poner dentro del elemento <span> una parte del texto 


title.innerHTML = `DOM - <span>Crear e insertar elementos I</span>`; // con innerHTML el texto queda dentro de la etiqueta <span> sin ser tratados como strings
//en este caso se precisa poner dentro del elemento <span> una parte del texto 
console.log(title);
*/

//añadir el contenido del array al documento html

//usando documentFragment

const fragment = document.createDocumentFragment(); //inyecta los elemento de una solo vez y no en las vueltas del ciclo
/*
for(const day of days){ //recorre el array
    const itemList = document.createElement("LI"); // crea un fragmento html y se guarda en una variable. se crea un elemento li con cada vuelta del bucle
    itemList.textContent = day; //la constante se rellena con el contenido de la constante day que guardo el recorrido del array
    fragment.appendChild(itemList); // se crean 7 elementos html
};
*/

//rellenando el despleglable (select)
for(const day of days){ // se recorre el array
    const selectItem = document.createElement('OPTION'); // se crea el elemento y se guarda en una constante
    selectItem.setAttribute('value', day);//se asigna el atributo de day a value
    selectItem.textContent = day;
    fragment.appendChild(selectItem); //se guardan los elementos a insertar en fragment
}
selectDays.appendChild(fragment); //se insertan los elementos 

//daysList.appendChild(fragment); // se impreme el fragmento en el documento html


/*
for(const day of days){ // se recorreel array, pero es una carga para el navegador, ya que a cada vuelta se redibuja el arbol de nodos
    //daysList.innerHTML = `<li>${day}</li>`; // si se escribe de esta manera se sobreescribe cada vuelta del bucle, no es acomulativo
    daysList.innerHTML += `<li>${day}</li>`; // agregando el +, se hace acumulativo cada vuelta del bucle 
    console.log(day); // se impreme en consola
};
*/
