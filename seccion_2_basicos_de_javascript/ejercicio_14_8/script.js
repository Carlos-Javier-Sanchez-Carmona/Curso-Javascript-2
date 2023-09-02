/*
    dado un array un array de letras, solicita un numero de DNI y calcula que letra le corresponde
    el numero no puede se negativo ni tener mas de 8 digitos. la posicion de la letra es el
    resultado del modulo del numero introducido entre 23

    const letras = ['T','R', 'W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q',
    'V','H','L','C','K','E'];
*/

let dni = prompt('introduce un numero');
const letras = ['T','R', 'W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q',
'V','H','L','C','K','E'];


if (dni < 0 || dni > 99999999) {
    console.log("El número no puede ser negativo ni tener más de 8 dígitos");
    } else {
    let letra = dni % 23; 
    console.log(` la letra de ${dni} es : ${letras[letra]}`);

}



//------------------------------------- codigo de gpt-bing

let letra = letraDNI(dni);


function letraDNI(dni) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (dni < 0 || dni > 99999999) {
        return "El número no puede ser negativo ni tener más de 8 dígitos";
    } else {
        return letras[dni % 23];
    }
}

console.log(`La letra del DNI ${dni} es ${letra}`);