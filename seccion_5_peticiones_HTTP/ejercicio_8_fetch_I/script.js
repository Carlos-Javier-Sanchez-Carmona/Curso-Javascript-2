/*
    Fetch API
    Es un reemplazo moderno para XMLHTTPRequest
    Proporciona una interfaz Javascript para acceder y manipular partes del canal http, como peticiones y ressuestas
    Tambien provee un metodo global Fetch() que proporciona una forma gacil y logica de obtener recursos de forma asincrona por la red
    Esta basado en promesas, por lo cual tiene un response y un reject internos
        Response tiene varios metodos:
            arrayBuffer(): Archivos binarios en brutos (mp3,pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo
            blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente
            clone(): crea un clon de un objeto re repsuesta, identico en todos los sentidos, pero almacenado en una variable diferente
            formData(): se utiliza para leer los objetos formData
            json(): convierte los archivos json en un objeto de javascript
            text(): se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en utf-8
*/

const button = document.getElementById('button');

//res = response = repsuesta
button.addEventListener('click', () => { //se añade un evento al boton para obtener datos
    fetch('https://jsonplaceholder.typicode.com/users') // no es necesario poner GET, ya que es el metodo por defecto de fecth
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res)) // comprueba el estado de la peticion, el estatus de la peticion tiene que se: 200.
        .then(res => res.json()) //convierte los objetos json a objetos javascript
        //.then(res => console.log(res)) //regresa la respuesta y con funcion fecha se imprime en consola.
        .then(res => {
            const list = document.getElementById('list'); //se obtiene al elemento donde se agregara el contenido
            for(const userInfo of res){ //se recorre el array de objetos y se guardan en un constante
                const listItem = document.createElement('li'); //se crea el elemento html y se guarda en una constante
                listItem.textContent = `${userInfo.id} - ${userInfo.name} - 
                ${userInfo.email} - ${userInfo.address.street} - ${userInfo.address.suite} - 
                ${userInfo.address.city} - ${userInfo.address.zipcode} - 
                ${userInfo.address.geo.lat} - ${userInfo.address.geo.lng}`; //se rellena el contenido que ira dentro del elemento html creado
                list.appendChild(listItem);// se agregan los elemtos hijo de
                console.log(res);
            }
        })
})