/*
    solicitar al usuario una palabra por consola el numero de consonantes, vocales y 
    la longitud de la palabra.
*/


let consonantes = ["a", "e", "i", "o", "u", 'A', 'E', 'I', 'O', 'U'];
let vocales = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n','p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N','P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];
let cont_consonat = 0;
let cont_vocales = 0;
let palabra = prompt('Introduce una la palabra');


for (let i = 0; i <= palabra.length; i++) {
    if(consonantes.includes(palabra[i])){
        let newCons = [palabra[i]];
        cont_consonat++;
        console.log(newCons);
    }
}
for (let j = 0; j <= palabra.length ; j++) {
    if (vocales.includes(palabra[j])) {
        let newVocal = [palabra[j]];
        cont_vocales++;
        console.log(newVocal);
        }
    }

console.log(`la palabra: ${palabra} tiene: " ${cont_consonat} " consonantes, " ${cont_vocales} " vocales y una longitud de " ${palabra.length} " caracteres`);
