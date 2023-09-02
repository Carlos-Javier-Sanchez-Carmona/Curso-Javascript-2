/*
    protocolo HTTP:
    https://es.wikipedia.org/wiki/protocolo_de_tranferencia_de_hipertexto

    https://developer.mozilla.org/es/docs/web/http/status

    API JSONPLACEHOLDER
    https://jsonplaceholder.typicode.com/
*/

const button = document.getElementById('button'); //localizando el boton
const list = document.getElementById('list');

button.addEventListener('click', () => {
    let xhr = new XMLHttpRequest(); //declarando la variable que guardara datos del objeto XMLHttpRequest()
    /* no funciona
    if(window.XMLHttpRequest()){ // se pregunta al navegador si soporta XMLHttRequest
        xhr = new XMLHttpRequest(); // este el objeto que va a guardar la peticion a la API
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHTTP"); //para navegadores viejos
    };
    */
    //peticion GET
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users'); //metodos http, GET y la url de la API
   
    //este evento se dispara cuando la informacion ya ha llegado al objeto
    xhr.addEventListener('load', (data) => {// los datos se guardan en la variable data
        //console.log(typeof data.target.response); //type of: los datos son tipo string. response: se comprueba la respuesta de la Api, y se visualizan los datos recibidos
        const dataJSON = JSON.parse(data.target.response); // se convierte el string en formato JSON, formato de objeto, array de objetos
        //se guardan los datos convertidos a JSON en una variable

        for(const userInfor of dataJSON){ //el bucle recorrera los objetos
            const listItem = document.createElement('LI'); // se crea un elemento <li>
            listItem.textContent = `${userInfor.id} - ${userInfor.name}`; // se obtiene el id y name de cada objeto y se van guardango en listItem
            list.appendChild(listItem); //se inserta el elemento hijo con el contenido guardado en listItem
        }
    });

    //peticion SEND
    xhr.send();
});