//DOM - Document objet Model

/*
    document | element .getElementById('id') - accede a un elemento a traves de su id

    document | element.querySelector('selectorCSS') - accede al primer elemento que coincida con el selector css

    document | element .querySelectorAll('selectorCSS') - accede al todos los elementos que coincidan con el selector CSS, devuelve un nodeList

    id para javascript
    class para css
 */
/*
const title = document.getElementById('title'); // obtiene el id  y contenido del elemento HTML

console.log(title); 

title.textContent = 'DOM - Accediendo a Nodos'; // .textcontent muestra por consola el contedido del elemento html o en su caso se puede usar para reescribir el contenido del elemento HTML
*/

//const paragraph = document.querySelector('paragraph'); //para la clase del elemento se agrega un punto antes del nombre de la clase
//const paragraph = document.querySelector('.paragraph:nth-child(3)'); //se accede al elemento hijo de la clase del elemento padre
                                                    //pseudoclases css
//console.log(paragraph);


//----------------------------------------
/*
const span = document.getElementById('title').querySelector('span'); //accede al id del elemento padre, para seguir bajando hasta el elemento buscado
                    //primero se accede al elemento padre
console.log(span);
*/

const paragraphs = document.querySelectorAll('.paragraph');

//const paragraphsSpread = [...document.querySelectorAll('.paragraph')]; // usando el spread operator para covertirlo en array


const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));//por temas de compatiblidad es mehor usar array.from que el sprad operator

//paragraphs[0].style.color ="red"; //se accede al parrafo 1 y se cambia su color

//paragraphs.map(p => p.style.color = "green");//aqui se genera un error, ya que un nodelist no es un array

paragraphsArray.map(p=>p.style.color = "green");

paragraphs[0].style.color ="red"; //se accede al parrafo 1 y se cambia su color

