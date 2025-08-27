// Función anónima asignada a una variable
const sumar = function(a, b) {
return a + b;
};
console.log(sumar(3, 4));
// Función con asignación de nombre
function sumar (a, b) {
return a + b;
};

// Sintaxis normal
const multiplicar = function(a, b) {
return a * b;
};
// Función flecha
const multiplicarFlecha = (a, b) => a * b;
console.log(multiplicarFlecha(3, 4)); // 12

const personas = [
{ nombre: "Luis", edad: 30 },
{ nombre: "Marta", edad: 25 }
];
console.log(personas[0].nombre); // "Luis"
console.log(personas[1].edad); // 25

