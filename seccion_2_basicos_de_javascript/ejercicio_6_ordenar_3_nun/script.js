/**Ordenar 3 numero, de mayor a menor */

//posibilidades: 3! = 3*2*1 = 6 - factorial
// abc 123
// acb 132
// bac 213
// bca 231
// cab 312
// cba 321


const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = Number.parseInt(prompt('Introduzca el primer numero')); //con prompt es para introducir datos a las variables
let b = Number.parseInt(prompt('Introduzca el segundo numero')); // es necesario agregar: Number.parseInt para evitar que los numeros introducidos sean tratatados como strings
let c = Number.parseInt(prompt('Introduzca el tercer numero'));

numbers.textContent = `los numeros introducidos son ${a}, ${b}, ${c}`;

// ejercicio

if(a >= b && a >= c){ //si a es mayor igual que b y si a es mayor que c
    if(b >= c){ //entoces si b es mayor que c
        result.textContent = `el orden es: ${a}, ${b}, ${c}` //imprimir en el html
    }else{// si c es mayor que b
        result.textContent = `el orden es: ${a}, ${c}, ${b}`
    }if(a == b && a == c ){ //comprueba si todos los numeros son iguales
        result.textContent = `Todos los numeros son iguales`
    }
}else if(b >= a && b >= c){ //si b es mayor igual que a y b es mayor igual que c
    if(a >= c){// entoces si a es mayor igual que c
        result.textContent = `el orden es: ${b}, ${a}, ${c}`
    }else{ // si c es mayor que a
        result.textContent = `el orden es: ${b}, ${c}, ${a}`
    }
}else if(c >= a && c >= b){ //si c es mayor igual que b y si c es mayor igual que a
    if(a >= b){ //entonces si a es mayor que b
        result.textContent = `el orden es: ${c}, ${a}, ${b}`
    }else{ //si b es mayor que a
        result.textContent = `el orden es: ${c}, ${b}, ${a}`
    }
}