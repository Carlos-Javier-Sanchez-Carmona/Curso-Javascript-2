/*
    Fetch API
        para hacer peticiones: POST, fetch admite un segundo parametro
        fetch(url, {
            method: 'POST',
            body: los datos que enviamos. Si es un objeto hay que convertirlo con JSON.stringify(datos),
            headers: {
                cabeceras de informacion sobre lo que estamos enviando
                https://dveloper.mozilla.org/es/docs//web/http/headers
            }
        })
*/

const button = document.getElementById('button');

button.addEventListener('click', () => {
    const newPost = { //objeto que contendra los datos que seran enviado, pero tiene que convertirse
        title: 'A new post',
        body: 'modi iusto delectus! Soluta at ab minima quod, cum deleniti quae?',
        userId: 1
        }
        fetch('https://jsonplaceholder.typicode.com/posts',{ //se hace la peticion a la url donde sera enviada la informacion
            method: 'POST', //metodo post - enviar
            body: JSON.stringify(newPost), // el objeto que contiene los datos se convierte a json para su envio
            headers:{
                "Content-type": "application/json" //se informa que es un tipo json
            }
        })
        .then(res => res.json()) // se obtiene la respuesta
        .then(data => console.log(data)) //una vez obtenida la respuesta se imprime en consola
        .catch(err => console.log(err)) // para manejar los errores
});