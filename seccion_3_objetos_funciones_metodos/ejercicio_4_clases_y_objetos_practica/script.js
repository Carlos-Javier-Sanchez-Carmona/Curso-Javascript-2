/*
    crear un clase Libro
    la clase libro tendra titulo, autor, año y genero.
    crea un metodo que devuelva toda la informacion del libro.
    pide  3 libros y guardalos en un array
    los libros se introduciran al arrancar el programa pidiendo datos con prompt
    validar que los campos no esten vacios
    validar que el año sea un numero y tenga 4 digitos
    validar que el genero sea: aventuras, terror y fantasia
    crea una funcion que muestre todos los libros
    crea una funcion que muestre los autores ordenados alfabeticamente
    crea una funcion que pida un genero y muestre la informacion de los libros que 
    pertenezcan a ese genero, usando un metodo que devuelva la informacion

*/

//creando la clase libro

class Book{
    constructor(title, author, year, gender){
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }

    getAuthor(){
        return this.author //metodo para devolver autores
    }

    getGender(){
        return this.gender //metodo para devolver generos
    }

    bookInfo(){ // metodo para devolver la informacion del libro
        return `${this.title} es un libro de ${this.gender} escrito por ${this.author} 
        en el año ${this.year}`
    }
}

let books = []; // array para guardar lo libros

while(books.length < 3){ // pide 3 libros
    let title = prompt('Titulo del libro');
    let author = prompt('Nombre del autor');
    let year = prompt('Año del libro');
    let gender = prompt('Genero del libro').toLowerCase();

    // ('!= distinto', '|| O' ). aqui se comprueba que los campos no esten vacios y que year se numero y que contiene 4 digitos
    // para el genero se hace un comprobacion unica
    if(title != '' && author != '' && !isNaN(year) && 
        year.length === 4 && 
        (gender == 'aventura' || gender == 'terror' || gender == 'fantasia')) {
            books.push(new Book(title, author, year, gender)) //se agregan los datos del prompt en el array books, usando la plantilla de la clase Book
    } 
}

// funcion para mostrar libros

const showAllBooks = () =>{
    console.log(books);
}

showAllBooks() // invocando la funcion


// funcion que muestra los autores en orden alfabetico

const showAuthors = () => {

    let authors = []; //array para guardar los autores

    for(const book of books){ // se recorreel array books
        authors.push(book.getAuthor()); // se obtienen los autores y se agregan al array authors
    }

    console.log(authors.sort()); // se imprimen alfabeticamente con la propiedad .sort
}

showAuthors()

// funcion que muestra los generos

const showGender = () => {
    const gender = prompt("introduce el genero a buscar"); //

    for(const book of books){ //recorre la clase
        if(book.getGender() == gender){ // comprueba el genero del usuario con los contenidos en el array books 
            console.log(book.bookInfo())
        }
    }
}

showGender()