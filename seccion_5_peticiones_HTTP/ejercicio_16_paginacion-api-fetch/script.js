// Paginacion del contenido de la API JSONPLACEHOLDER

const elementsPag = 8; // Número de elementos por página


let paginaActual = 1; // Página actual

// Obtener datos de la API de JSONPlaceholder
fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(response => response.json()) //respuesta de la API
    
    .then(res => {
        
        const totalPages = Math.ceil(res.length / elementsPag); // Número total de páginas

        // el div main padre contendra todos los div hijos, son la cantidad de elementos de la pagina
        function actualizarMain() { // Función para actualizar con los datos de la página actual
            
            // Calcular el índice de inicio y fin para la página actual
            const indiceInicio = (paginaActual - 1) * elementsPag;
            const indiceFinal = paginaActual * elementsPag;

            // Obtener los datos para la página actual, se crea un array con los datos obtenidos
            const dataPagina = res.slice(indiceInicio, indiceFinal);

            // Limpiar el contenido de la tabla
            document.querySelector('#main').innerHTML = '';

            // Agregar los datos al div para crear las card
            const fragment = document.createDocumentFragment();

            dataPagina.forEach(photosInfo => {

                const card = document.createElement("div");
                card.className = "card";

                const img = document.createElement("img");
                img.src = photosInfo.url;

                const titulo = document.createElement("h3");
                titulo.textContent = photosInfo.title;

                const id = document.createElement('h4');
                id.textContent = photosInfo.id;

                card.append(img, titulo, id);
                fragment.appendChild(card);
                
                document.querySelector('#main').innerHTML;
            });
            main.appendChild(fragment);
            console.log(dataPagina)
        }

        // Función para actualizar los botones de paginación
        function actualizarPaginacion() {
            // Deshabilitar el botón "anterior" si estamos en la primera página
            if (paginaActual === 1) {
                document.querySelector('#prev-btn').disabled = true;
                
            } else {
                document.querySelector('#prev-btn').disabled = false;
                
            }

            // Deshabilitar el botón "siguiente" si estamos en la última página
            if (paginaActual === totalPages) {
                document.querySelector('#next-btn').disabled = true;
                
            } else {
                document.querySelector('#next-btn').disabled = false;
                
            }
        }

        // evento click para el botón anterior
        document.querySelector('#prev-btn').addEventListener('click', () => {
            paginaActual--;
            actualizarMain();
            actualizarPaginacion();
        });

        // evento click para el botón siguiente
        document.querySelector('#next-btn').addEventListener('click', () => {
            paginaActual++;
            actualizarMain();
            actualizarPaginacion();
        });

        // Actualizar el main
        actualizarMain();
        actualizarPaginacion();
    });
