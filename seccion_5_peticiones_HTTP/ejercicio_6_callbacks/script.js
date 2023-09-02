//un callback es una función que se ejecuta a traves de otra función
//los callbacks no son asincronos

//se declara una funcion: getUser, que contiene un objeto: user
//id es un parametro
/*
const getUser = (id, cb) =>{
    const user = {
        name: 'Xavy',
        id: id
    };
    cb(null, user);//se llama al callback con sus parametros
};


//se pasan los parametros de la funcion getUser
getUser(id = prompt('introduce tu Id: '), (err, user) => {
    if(err) return console.log(err);
    console.log(`user name is: ${user.name}`);
});
*/

//array de usuarios e id
const users = [
    {
        id: 1,
        name: 'Carlos'
    },
    {
        id: 2,
        name: 'Maria'
    },
    {
        id: 3,
        name: 'Dorian'
    }
];

//array de emails
const emails = [
    {
        id: 1,
        email: 'carlos@gmail.com'
    },
    {
        id: 2,
        email: 'maria@gmail.com'
    },
];

//se declara la funcion para obtener el usuario, con sus parametros y callback
const getUser = (id, cb) =>{
    const user = users.find(user => user.id == id); //se recorre el array de users y se guarda el id en una variable temporal que se compara con el id introducido por el usuario y el id del array
    if(!user) cb(`No existe el usuario con el id: ${id}`); //comprueba que realmente existe un usuario con ese id 
    else cb(null, user); //si existe devuelve el user sin errores
    //console.log(user); //se imprime en consola el objeto que se localizo segun el id introducido
};

//se declara la funcion para obtener el email, con prametros y callback
const getEmail = (user, cb) =>{ //se pasa el user como parametro para su comprabacion
    const email = emails.find(email => email.id == user.id);// se compara si el id del usuario es igual al email
    if(!email) cb(`${user.name} no tiene email`); // imprime el usuario e indica que no posee email
    else cb(null,{ // si existe, imprime los datos de user mas email
        id: user.id,
        name: user.name,
        email: email.email
    });
};

// se pide un id al usuario
getUser(id = prompt('introduce tu id: '), (err, user) =>{
    if(err) return console.log(err);

    getEmail(user, (err, res) => { //se pasan los pametros y callback con error y respuesta
        if(err) return console.log(err); //si hay error, imprime el error
        console.log(res) //si no, imprime la respuesta
    })
}); 

