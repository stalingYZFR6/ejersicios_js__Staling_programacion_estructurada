//1. Declara una variable nombre y asígnale tu nombre. Muestra su valor en consola

let nombre = 'Staling Loaisiga Huete';
console.log(nombre);

// 2. Declara dos variables edad y ciudad y muéstralas juntas en un solo console.log.

let edad = 19;
let ciudad = "Juigalpa";
console.log("Edad:", edad, "| Ciudad:", ciudad);

// 3. Constante PI
const PI = 3.1416;
console.log("Valor de PI:", PI);

// 4. tres variables numericas 
let num1 = 8;
let num2 = 12;
let num3 = 20;
let promedio = (num1 + num2 + num3) / 3;
console.log("Promedio:", promedio);

// 5. Variable booleana
let esMayorDeEdad = true;
console.log("¿Es mayor de edad?:", esMayorDeEdad);

// 6. Suma de dos números
let a = 10;
let b = 5;
console.log("Suma:", a + b);

// 7. Resta, multiplicación y división
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);

// 8. Potencia (a elevado a b)
console.log("Potencia:", a ** b);

// 9. Precio con descuento
let precio = 1000;
let descuento = 20; // en %
let precioFinal = precio - (precio * (descuento / 100));
console.log("Precio final con descuento:", precioFinal);

// 10. Números del 1 al 10 usando for
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 11. Tabla de multiplicar del 5
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 12. Números pares del 2 al 20 usando while
let num = 2;
while (num <= 20) {
    console.log(num);
    num += 2;
}

// 13. Función saludar
function saludar(nombre) {
    console.log(`Hola, ${nombre}!`);
}
saludar("Carlos");

// 14. Función sumar
function sumar(x, y) {
    return x + y;
}
console.log("Suma:", sumar(10, 5));

// 15. Función esPar
function esPar(numero) {
    return numero % 2 === 0;
}
console.log("¿Es par 4?:", esPar(4));
console.log("¿Es par 7?:", esPar(7));

// 16. Función área de rectángulo
function areaRectangulo(base, altura) {
    return base * altura;
}
console.log("Área del rectángulo:", areaRectangulo(5, 3));

// 17. Función flecha multiplicar
const multiplicar = (a, b) => a * b;
console.log("Multiplicación:", multiplicar(4, 6));

// 18. Función flecha convertir Celsius a Fahrenheit
const convertirCelsiusAFahrenheit = celsius => (celsius * 9/5) + 32;
console.log("25°C en Fahrenheit:", convertirCelsiusAFahrenheit(25));

// 19. Función flecha mayor de dos números
const mayorDeDos = (x, y) => (x > y ? x : y);
console.log("Mayor entre 15 y 20:", mayorDeDos(15, 20));

// 20. Función flecha calcular precio + IVA (15%)
const calcularIVA = precio => precio * 1.15;
console.log("Precio con IVA:", calcularIVA(1000));

