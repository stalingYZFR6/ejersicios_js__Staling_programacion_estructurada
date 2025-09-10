
// push(): Añade uno o más elementos al final del arreglo y devuelve la nueva
//longitud del arreglo.

let numeros = [1, 2, 3];
let longitud = numeros.push(4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(longitud); // 5

//unshift(): Añade uno o más elementos al inicio del arreglo y devuelve la
//nueva longitud.

let letras = ['b', 'c'];
let longitud2 = letras.unshift('a');
console.log(letras); // ['a', 'b', 'c']
console.log(longitud); // 3

//pop(): Elimina y devuelve el último elemento del arreglo, reduciendo su
//longitud en 1.

let frutas = ['manzana', 'banana', 'naranja'];
let ultima = frutas.pop();
console.log(frutas); // ['manzana', 'banana']
console.log(ultima); // 'naranja'

//shift(): Elimina y devuelve el primer elemento del arreglo, reindexando los
//demás elementos.

let colores = ['rojo', 'verde', 'azul'];
let primero = colores.shift();
console.log(colores); // ['verde', 'azul']
console.log(primero); // 'rojo'

// indexOf(elemento, [inicio]): 
// Busca un elemento en el arreglo y devuelve el índice de la primera aparición, o -1 si no lo encuentra.
// Opcionalmente, puedes especificar un índice de inicio.
let numeros1 = [10, 20, 30, 20, 40];
let indice = numeros1.indexOf(20); // 1
let indiceDesde2 = numeros1.indexOf(20, 2); // 3
console.log(indice); // 1
console.log(indiceDesde2); // 3


// length: 
// Propiedad que devuelve la cantidad de elementos en el arreglo.
// También puede usarse para truncar o extender el arreglo asignando un nuevo valor.
let arreglo = [1, 2, 3];
console.log(arreglo.length); // 3
arreglo.length = 1; // Trunca a [1]
arreglo.length = 5; // Extiende a [1, undefined, undefined, undefined, undefined]


// sort([comparador]): 
// Ordena los elementos del arreglo en orden ascendente (por defecto, como cadenas).
// Para números, es necesario usar una función comparadora.
let numeros2 = [3, 1, 4, 2];
numeros2.sort((a, b) => a - b); // Orden ascendente
console.log(numeros2); // [1, 2, 3, 4]


// join(separador): 
// Convierte todos los elementos del arreglo en una cadena, usando el separador especificado.
let palabras = ['hola', 'mundo'];
let texto = palabras.join(' '); 
console.log(texto); // 'hola mundo'


// concat(arreglo1, arreglo2, ...): 
// Une dos o más arreglos (o elementos) y devuelve un nuevo arreglo.
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2, [5]);
console.log(combinado); // [1, 2, 3, 4, 5]


// forEach(callback): 
// Ejecuta una función por cada elemento del arreglo, sin devolver un nuevo arreglo.
let colores1 = ['rojo', 'verde', 'azul'];
colores1.forEach(color => console.log(color));
// Imprime: rojo, verde, azul


// map(callback): 
// Crea un nuevo arreglo aplicando una función a cada elemento del arreglo original.
let numeros3 = [1, 2, 3];
let dobles = numeros3.map(x => x * 2);
console.log(dobles); // [2, 4, 6]


// filter(callback): 
// Crea un nuevo arreglo con los elementos que pasan una condición.
let numeros4 = [1, 2, 3, 4];
let pares = numeros4.filter(x => x % 2 === 0);
console.log(pares); // [2, 4]


// reduce(callback, [valorInicial]): 
// Reduce el arreglo a un solo valor aplicando una función acumuladora.
let numeros5 = [1, 2, 3, 4];
let suma = numeros5.reduce((acc, curr) => acc + curr, 0);
console.log(suma); // 10


// some(callback): 
// Devuelve true si al menos un elemento cumple la condición.
let numeros6 = [1, 2, 3, 4];
let hayPares = numeros6.some(x => x % 2 === 0);
console.log(hayPares); // true


// every(callback): 
// Devuelve true si todos los elementos cumplen la condición.
let numeros7 = [2, 4, 6, 8];
let todosPares = numeros7.every(x => x % 2 === 0);
console.log(todosPares); // true


// find(callback): 
// Devuelve el primer elemento que cumple la condición, o undefined si no lo encuentra.
let numeros8 = [1, 2, 3, 4];
let encontrado = numeros8.find(x => x > 2);
console.log(encontrado); // 3


// findIndex(callback): 
// Devuelve el índice del primer elemento que cumple la condición, o -1 si no lo encuentra.
let numeros9 = [1, 2, 3, 4];
let indice2 = numeros9.findIndex(x => x > 2);
console.log(indice2); // 2


// entries(): 
// Devuelve un iterador de los índices y valores del arreglo.
let colores2 = ['rojo', 'verde', 'azul'];
let iterador = colores2.entries();
console.log([...iterador]);
// [[0, 'rojo'], [1, 'verde'], [2, 'azul']]


// keys(): 
// Devuelve un iterador de los índices del arreglo.
let colores3 = ['rojo', 'verde', 'azul'];
let iterador2 = colores3.keys();
console.log([...iterador2]); // [0, 1, 2]


// values(): 
// Devuelve un iterador de los valores del arreglo.
let colores4 = ['rojo', 'verde', 'azul'];
let iterador3 = colores4.values();
console.log([...iterador3]); // ['rojo', 'verde', 'azul']


let arreglo = [1, 2, 3, "texto", true];

const arroglo2 = [1, 2, 3, "texto", true];

let arreglo3 = new Array(1, 2, 3);

let arreglo4 = [];

let arreglos = [{},{},{},{}];

let arreglo6 = [{"nombre": "Eliab Selva", "edad":19},{}, {},{} ];

let arreglo7 = [[{},{}], ["A", 1, 2], [true, false]];







let numeros10 = [1, 2, 3, 4];
let hayImpares = numeros10.filter(x => x % 2 !== 0);
console.log(hayImpares); // true (porque hay impares: 1 y 3)

const numeros66 = [1, 2, 3, 4];
const impares = numeros66.filter(n => Math.abs(n % 2) === 1);
console.log(impares); // [1, 3]


let numeros11 = [1, 2, 3, 4];
let suma8 = numeros11.reduce((acc, curr) => acc + curr, 0);
console.log(suma8); // 10

let precios = [40, 20, 30, 40];
let sumas = precios.reduce((acumulador,varoActual) => acumulador + varoActual, 0);
console.log(sumas); // 130
