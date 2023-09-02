//libreria axios Get
//https://github.com/axios/axios

const button = document.getElementById('button');

button.addEventListener('click', () => {
    axios({ //llamar a la libreria axios, recibe un objeto
        // parametros
        method: 'GET', //metodo 
        url: 'https://jsonplaceholder.typicode.com/users' // direccion para la peticion
    }).then(res => { // metodo then, por que es una promesa
        //console.log(res.data) // se imprime la respuesta de la peticion hecha en la API
        const list = document.getElementById('list');
            const fragment = document.createDocumentFragment();
            for(const userInfo of res.data){
                const listItem = document.createElement('li');
                listItem.textContent = `${userInfo.id} - ${userInfo.name} - ${userInfo.email}`;
                fragment.appendChild(listItem);
            }
            list.appendChild(fragment);
    }).catch(err => console.log(err)) // para manejar el error
})