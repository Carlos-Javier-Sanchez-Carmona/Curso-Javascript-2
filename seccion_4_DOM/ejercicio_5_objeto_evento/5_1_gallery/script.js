const gallery = document.getElementById('gallery'); // se accede al id del elemento
//const gallery_item = document.querySelectorAll('.gallery_item');

/*
gallery_item.addEventListener('click', (e) => {
    e.target.classList.add('red');
    console.log('has presionado el: ', e.target.textContent);
})
*/

gallery.addEventListener('click', (e) => { // se agrega el evento de raton al elemento padre
   if(e.target != gallery){
    e.target.classList.add('red'); // agrega la clase red al elemento para asignar una nueva caracteristica
    console.log('Has presionado el: ', e.target.textContent); //se imprime el objeto evento.target.textcont
   }else{
    console.log('estas presionando el div padre')
   }
});  //.target sirve para saber en que parte se hizo click, .textcontent imprime el contenido del elemento


 //checar error, el target colorea al elemento hijo como al padre