/*
    Fetch API
    blob() - binary long objet, para manejo de archivos
*/

const buttImg = document.getElementById('button-img');
const buttPDF = document.getElementById('button-pdf');

buttImg.addEventListener('click', () => {
    fetch('archivos/huehue.jpg') //se hace la peticion del recurso local
    //.then(res => console.log(res)) //devuelve la respuesta de la promesa
    .then(res => res.blob()) // .blob() - metodo para leer imagenes 
    .then(img => { //hasta aqui la imagen ya existe pero aun no puede visualizarse de manera correcta
        document.getElementById('img').src = URL.createObjectURL(img); //el metodo URL.createObjetURL crea un enlace valido hacia el archivo seleccionado
    })
});

buttPDF.addEventListener('click', () => {
    fetch('archivos/carta.pdf')
    .then(res => res.blob())
    .then(pdf => {
        document.getElementById('pdf').href = URL.createObjectURL(pdf)
    })
})