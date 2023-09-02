//libreria axios Get
//https://github.com/axios/axios

const elementsPag = 12; // elementos que se mostraran por pagina
let paginaActual = 1; // numero de paginas por documento


axios({
    method: 'GET', 
    url: 'https://jsonplaceholder.typicode.com/photos'
    })
    .then( res => {
        //se imprime en consola toda la informacion de la peticion a la url
        //console.log(res)

        //se accede a los datos que deseamos
        //el array res contiene 5000 elementos
        console.log(res.data)

        // el numero de paginas de obtiene dividiendo la longitud de res entre el numero de elementos que se mostraran por pagina
        //el metodo .ceil devuelve el entero superior mas proximo
        //en este caso: 5000 / 12 = 416.66 - con el metodo .ceil = 417
        const totalPages = Math.ceil((res.data).length / elementsPag) //
        console.log(totalPages)

        // el div main padre contendra todos los div hijos, son la cantidad de elementos de la pagina
        // Función para actualizar los datos de la página actual
        function actualizarMain() {

            // Calcular el índice de inicio y fin para la página actual
            const indiceInicio = (paginaActual - 1) * elementsPag;
            const indiceFinal = paginaActual * elementsPag;

            // Obtener los datos para la página actual, se crea un array con los datos obtenidos
            const dataPag = res.data.slice(indiceInicio, indiceFinal);
            console.log(dataPag);

            // Limpia el contenido del div contenedor
            //queryselector siver para localizar y seleccionar un elemento html
            document.querySelector('#main').innerHTML = '';

            //crea un framento que contendra los elementos que se crearan y seran insertados en un solo instante, evitando insertar elemento por elemento
            const fragment = document.createDocumentFragment();

            // se recorre el array dataPag para obtener los datos que se mostraran en la pagina
            // esos datos de guardan en photosInfo, dentro de la cual se obtienen: el title, id, url, para las targetas que se crearan a continuacion
            dataPag.forEach(photosInfo => {

                //el div con clase card contendra la informacion de cada targeta
                //su clase se usara para darle estilos desde css
                const card = document.createElement('div');
                card.className = "card";

                //se crea el elemento imagen que guardara la imagen 
                const img = document.createElement('img');
                //el recurso solicitado se encuentra dentro del array photosInfo en la parte de url
                img.src = photosInfo.url;

                //se cra el elemento h3 que que gauardara el titulo
                const titulo = document.createElement('h3');
                //el recurso solicitado se encuentra dentro del array photosInfo en la parte de title
                titulo.textContent = photosInfo.title;

                // se indica a la constante card que se le añadira el contenido de img y titulo
                card.append(img,titulo);
                // se indica a fragment que se añadira todo el contenido de card
                fragment.appendChild(card)

                document.querySelector('#main').innerHTML;
            });
            main.appendChild(fragment);
        };

        //funcion para actualizar los botones de paginacion
        function actualizarPaginacion(){
            //deshabilitar el boton "anterior", si estamos en la primera pagina
            if (paginaActual === 1) {
                document.getElementById('prev-btn').disabled = true;
                
            }else{
                document.getElementById('prev-btn').disabled = false;
            }

            //deshabilita el boton "siguiente", si estamos en la ultima pagina
            if (paginaActual === totalPages) {
                document.querySelector('#next-btn').disabled = true;
            } else {
                document.querySelector('#next-btn').disabled = false;
            }
        }

        //evento click para el boton anterior
        document.getElementById("prev-btn").addEventListener ("click" , () => {
            paginaActual--;
            console.log(paginaActual);
            actualizarMain();
            actualizarPaginacion();
        });

        //evento click para boton siguiente
        document.getElementById("next-btn").addEventListener ('click' , () => {
            paginaActual++;
            console.log(`la pagina actual es: ${paginaActual}`); `` 
            actualizarMain();
            actualizarPaginacion();
        })  

        actualizarMain();
        actualizarPaginacion();

}).catch(err => console.log(err))