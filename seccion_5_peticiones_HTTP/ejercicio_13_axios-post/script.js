//libreria axios POST

const button = document.getElementById('button');

button.addEventListener('click', () => {
    alert('Datos enviados');
    axios({ // se llama a la libreria axios
        //recibe los parametros
        method: 'POST', //metodo post, se envian datos a la API
        url: 'https://jsonplaceholder.typicode.com/users', // direccion para enviar los datos
        data: { //objetos con los datos a enviar
            title: 'Nuevo post',
            body: 'lorem ipsum dolor sit emat consectetur',
            userId: 1
            //ya no es necesario escribir un metodo para convetir los datos a JSON, ya que lo hace internamente
        }
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
})