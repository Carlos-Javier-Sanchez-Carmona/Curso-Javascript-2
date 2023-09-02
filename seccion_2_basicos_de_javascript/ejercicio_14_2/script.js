/*
    escribe un programa que pueda calcular el area de tres figuras geometricas, triangulo,
    rectangulo y circulo. en primer lugar pregunta de que figura se quiere calcular el area,
    despues solicita los datos necesarios para calcularlo.
        triangulo: b*h/2
        rectangulo: b*h
        circulo = pi *r2 (pi por radio al cuadrado)
*/

let PI = 3.1416;
let area = "";

let figura = prompt(
  "Area de figura a calcular [Triangulo, Rectangulo, Circulo]"
);

if (figura === "Triangulo") {
    let b = prompt("Introduce la base");
    let h = prompt("Introduce la altura");

    area = (b * h) / 2;
    console.log(`el area del triangulo es: ${area} centimetros`);
} else if (figura === "Rectangulo") {
    let b = prompt("Introduce la base");
    let h = prompt("Introduce la altura");

    area = (b * h);
    console.log(`el area del rectangulo es: ${area} centimetros`);
} else if (figura === "Circulo") {
    let r = prompt("Introduce el radio");
    

    area = (PI * Math.pow(r,2)); // math.pow (a,b) para elevar un numero a una potencia
    console.log(`el area del circulo es: ${area} centimetros`);
}else{
    console.log("Figura no encontrada")
}
