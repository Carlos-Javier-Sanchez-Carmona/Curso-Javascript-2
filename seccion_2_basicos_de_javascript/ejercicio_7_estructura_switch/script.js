//estructura switch


let num = 5;

//sintaxis simple

switch(num){
    case 1: console.log('Num tiene el valor 1');
    break;
    case 2: console.log('Num tiene el valor 2');
    break;
    default: console. log('Num no vale ninguno de los valores anteriores');
}


//switch multiple

switch(num){
    case 1:
    case 3:
    case 5:
        console.log(`${num} es impar`);
    break;
    case 2:
    case 4:
        console.log(`${num} es par`);
    break;
}
