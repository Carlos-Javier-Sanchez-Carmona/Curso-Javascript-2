//atributos desde javascript


/* atributos
        element.getAttribute('atribute');
        element.setAttribute('atribute')

    clases
        element.classList.add('class','class',...)
        element.classList.remove('class','class',...)
        element.classList.contains('class')
        element.classList.replace('oldClass', new class)

        element.classList.toggle('class'[,force])

    atributos directos
        id
        value
 */

const title = document.getElementById('title');
const name = document.getElementById('name');


/*
console.log(title.getAttribute('id'));
console.log(name.getAttribute('type'));
*/

//name.setAttribute('type', 'date'); //asigna un nuevo valor al atributo
//name.setAttribute('type', 'radio');


//clases


//title.classList.add('main-title', 'sub-title'); //agrega las clases al elemento seleccionado
//console.log(title);

//title.classList.remove('title'); //remueve la clase del elemento seleccionado

//console.log(title);

/*
if(title.classList.contains('title')){// comprueba si el elemento posee la clase buscada
    console.log('Title tiene la clase title');
}else console.log('Title no tiene la clase title')

console.log(title);
*/

//title.classList.replace('title', 'main-title'); // busca la clase en el elemento seleccionado y la remplaza por una nueva clase

//console.log(title);

//atributos directos

//console.log(title.innerHTML); //recoge la etiquetas html del elemento
//console.log(title.textContent); //recoge el texto plano contenido dentro del elemento
console.log(name.value);