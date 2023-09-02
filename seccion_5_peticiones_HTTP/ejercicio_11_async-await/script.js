//funcion getname

/*
const getName = () => {
    return new Promise((resolve, reject) => { // se declara una nueva promesa con sus parametros
        resolve("Dorian")// su repuesta
    })
};
getName()
    .then(name => console.log(name)) //resuelve el contenido de la promesa
*/

/*
const getName = async () => { // funcion asincrona
    return new Promise((resolve, reject) => { // se declara una nueva promesa con sus parametros
        setTimeout(() => { //la funcion se ejcutara despues de un tiempo determinado, en milisegundos 
            resolve('Dorian') // respuesta de la promesa
        }, 1500) // tiempo de retraso para su ejecucion
    })
};

//se agrega async para indicar que es una funcion asincrona
const sayHello = async () => { // se crea la funcion saludar
    //se agrega await para esperar a que la promesa se resuelva y asi poder usar su respuesta
    const name = await getName() // la respuesta de la funcion asincrona se guarda en una variable
    return `Hola ${name}` // regresa el saludo a la respuesta guardada en la variable name
}    

//console.log(sayHello()); // se invoca la funcion, pero el resultado genera un error pues la promesa aun no se resuelve, todo el codigo se ejecuta pero la promesa lo hara 1.5 segundos despues
sayHello() // se invoca la funcion con su metodo .then para usar la respuesta de la promesa
    .then(res => console.log(res));
*/

const users = [{ id: 1, name: 'Carlos'}, { id: 2, name: 'Maria'}, { id: 3, name: 'Dorian'}];

//array de emails
const emails = [{ id: 1, email: 'carlos@gmail.com'}, { id: 2, email: 'maria@gmail.com'},];

const getUser = async (id) => { //funcion asoncrona
    const user = users.find(user => user.id == id) // se usa el metodo find para buscar el id dado por el usuario dentro del array users, se compara si el id coincide con alguno dentro del array
    if(!user) throw new Error(`No existe usuario con el id: ${id}`) //throw es un constructor, que construye un objeto error, se lanza una excepcion, si no existe el id buscado se lanza el error
    else return (user) // regresa - si existe el id, regresa el usuario
};

const getEmail = async (user) => {// funcion asincrona - como parametro se usa a user
    const email = emails.find(email => email.id == user.id) // se recorre el array buscando que el id de user coincida con algun id de emails
    if(!email) throw new Error (`el usuario: ${user.name} no tiene email`) //si no hay coincidencia se lanza el error
    else return ({ // si coincide, devuelve los datos de user e email
        id: user.id,
        name: user.name,
        email: email.email
    });
};

const getInfo = async (id) => { //funcion asincrona - parametro id
    try{ //intenta resolver si algo sale mal lo manda al catch
        const user = await getUser(id = prompt('introduce tu Id: ')) // se introduce un id para resolver la funcion getUser
        const res = await getEmail(user) // una vez resuelta la funcion getUser se para a resolver getEmail
        return `${user.name} su correo es ${res.email}` // si hubo coincidencias de id user y id email, se manda la respuesta a res
    }catch (error){ // si no hubo coincidencia aqui se maneja ese error
        console.log(error) // se imprime el error encontrado
    }
}

getInfo().then(res => console.log(res)) //se imprime la respuesta de la funcion getInfo