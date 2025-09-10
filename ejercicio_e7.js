// 1 Añadir elementos al final del arreglo
const agregarAlFinal = (arreglo, ...elementos) => [...arreglo, ...elementos];
console.log("Agregar al final:", agregarAlFinal([1,2,3], 4,5)); // [1,2,3,4,5]


// 2 Añadir elementos al inicio del arreglo
d // [0,1,2,3]


// 3 Eliminar y devolver el último elemento
const eliminarUltimo = (arreglo) => arreglo.pop();
let arregloEliminarUltimo = [1,2,3];
console.log("Eliminar último:", eliminarUltimo(arregloEliminarUltimo), "-> Nuevo arreglo:", arregloEliminarUltimo); // 3 -> [1,2]


// 4 Eliminar y devolver el primer elemento
const eliminarPrimero = (arreglo) => arreglo.shift();
let arregloEliminarPrimero = [1,2,3];
console.log("Eliminar primero:", eliminarPrimero(arregloEliminarPrimero), "-> Nuevo arreglo:", arregloEliminarPrimero); // 1 -> [2,3]


// 5 Obtener índice de la primera aparición de un elemento
const indiceElemento = (arreglo, elemento, inicio = 0) => arreglo.indexOf(elemento, inicio);
console.log("Índice del elemento 2:", indiceElemento([1,2,3,2], 2)); // 1


// 6 Obtener la cantidad de elementos en el arreglo
const cantidadElementos = (arreglo) => arreglo.length;
console.log("Cantidad de elementos:", cantidadElementos([1,2,3,4])); // 4

// 7 Ordenar arreglo de números en orden ascendente
const ordenarAscendente = (arreglo) => [...arreglo].sort((a, b) => a - b);
console.log("Ordenar ascendente:", ordenarAscendente([5,2,8,1])); // [1,2,5,8]

// 8 Unir elementos de un arreglo en una cadena con separador
const unirElementos = (arreglo, separador = ',') => arreglo.join(separador);
console.log("Unir elementos con '-':", unirElementos(["a","b","c"], "-")); // "a-b-c"

// 9 Combinar uno o más arreglos y/o elementos
const combinarArreglos = (...arreglos) => arreglos.flat();
console.log("Combinar arreglos:", combinarArreglos([1,2],[3,4],5,6)); // [1,2,3,4,5,6]

// 10 Ejecutar callback por cada elemento sin devolver nuevo arreglo
const forEachElemento = (arreglo, funcion) => arreglo.forEach(funcion);
console.log("forEach elemento *2:");
forEachElemento([1,2,3], x => console.log(x * 2)); // imprime 2,4,6

// 11 Devolver un nuevo arreglo aplicando callback a cada elemento
const mapElemento = (arreglo, funcion) => arreglo.map(funcion);
console.log("Map elemento *2:", mapElemento([1,2,3], x => x * 2)); // [2,4,6]

// 12 Devolver un nuevo arreglo con elementos que cumplen condición
const filterElemento = (arreglo, funcion) => arreglo.filter(funcion);
console.log("Filter elementos >2:", filterElemento([1,2,3,4], x => x > 2)); // [3,4]

// 13 Reducir arreglo a un solo valor usando callback y valor inicial opcional
const reducirArreglo = (arreglo, funcion, valorInicial) => 
    valorInicial !== undefined ? arreglo.reduce(funcion, valorInicial) : arreglo.reduce(funcion);
console.log("Reducir suma:", reducirArreglo([1,2,3,4], (acumulador, elemento) => acumulador + elemento, 0)); // 10
