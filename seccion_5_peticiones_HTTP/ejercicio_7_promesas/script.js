// promesas

//array de objetos usuarios
const users = [
    {
        id: 1,
        name: "Dorian"
    },
    {
        id: 2,
        name: "Maria"
    },
    {
        id: 3,
        name: "Carlos"
    }
];

//array de objetos email
const emails = [
    {
        id: 1,
        email: "dorian@gmail.com"
    },
    {
        id: 2,
        email: "maria@gmail.com"
    }
];

//una promesa es un objeto con dos callback dentro
// promesa para obtener user

const getUser = (id) => {
    const user = users.find(user => user.id == id); //se busca el id proporcionado por el usuario en el array users con el metodo find y se guarda en una variable user
    const promise = new Promise((resolve, reject) => { // se declara la promesa con sus parametros
        if(!user) reject(`No existe usuario con el Id ${id}`); //se comprueba si no existe el usuario
        else resolve(user) // si existe, devuelve el usuario
    });

    return promise; //regresa la promesa
};

// promesa para obtener email

const getEmail = (user, cb) => {
    const email = emails.find(email => email.id == user.id); //con el id del usuario accede al array de emails y busca si algun id coicide
    const promise = new Promise((resolve, reject) => {// se declara la promesa
        if(!email) reject(`el ${user.name} no tiene email`);// si el id del user no coincide con ningun id de emails, mostrara un mensaje
        else resolve({ //el objeto que contendra la promesa para su uso si los id de user e id de email coinciden
            id: user.id,
            name: user.name,
            email: email.email
        });
    })
    return promise;
}



getUser(id = prompt(`Introduce tu id: `));
//console.log(getUser(id)); //imprime en consola la promesa, pero no muestra los datos que estan dentro de ella
getUser(id)
    .then(user => {
       return getEmail(user);
    }) //el metodo .then resuelve/muestra el contenido de la promesa
    .then(res => console.log(res)) //respuesta de la promesa de email
    .catch(err => console.log(err)); //el metodo .catch se usa para manejar los errores de las promesas
