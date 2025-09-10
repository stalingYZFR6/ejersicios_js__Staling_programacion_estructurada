// Crear una cola
let cola = [];

// Agregar elementos (enqueue)
cola.push("Tarea 1"); // ["Tarea 1"]
cola.push("Tarea 2"); // ["Tarea 1", "Tarea 2"]
cola.push("Tarea 3"); // ["Tarea 1", "Tarea 2", "Tarea 3"]

console.log(cola); //["Tarea 1", "Tarea 2", "Tarea 3"]

// Eliminar elementos (dequeue)
console.log(cola.shift()); // "Tarea 1" (sale el primero)
console.log(cola); // ["Tarea 2", "Tarea 3"]
console.log(cola.shift()); // "Tarea

let cola1 = [];

// Agregar elementos (enqueue)
cola1.push("Tarea 1"); // Se agrega Tarea 1 → ["Tarea 1"]
cola1.push("Tarea 2"); // Se agrega Tarea 2 → ["Tarea 1", "Tarea 2"]
cola1.push("Tarea 3"); // Se agrega Tarea 3 → ["Tarea 1", "Tarea 2", "Tarea 3"]

console.log(cola1); // ["Tarea 1", "Tarea 2", "Tarea 3"]

// Eliminar elementos (dequeue)
console.log(cola1.shift() + " eliminada"); // Tarea 1 eliminada
console.log(cola1); // ["Tarea 2", "Tarea 3"]

console.log(cola1.shift() + " eliminada"); // Tarea 2 eliminada
console.log(cola1); // ["Tarea 3"]



// Crear una pila
let pila = [];

// Agregar elementos (push)
pila.push("Plato 1"); // ["Plato 1"]
pila.push("Plato 2"); // ["Plato 1", "Plato 2"]
pila.push("Plato 3"); // ["Plato 1", "Plato 2", "Plato 3"]

// Eliminar elementos (pop)
console.log(pila.pop()); // "Plato 3" (sale el último)
console.log(pila); // ["Plato 1", "Plato 2"]
console.log(pila.pop()); // "Plato 2"
console.log(pila); // ["Plato 1"]

let colaTareas = [];

const agregarAlFinal = (tarea) => {
  colaTareas.push(tarea);
  console.log(`Tarea agregada: ${tarea}. Cola actual: ${colaTareas}`);
};

const removerDelInicio = () => {
  if (colaTareas.length === 0) {
    console.log("Cola vacía.");
    return null;
  }
  const tareaProcesada = colaTareas.shift();
  console.log(`Tarea procesada: ${tareaProcesada}. Cola actual: ${colaTareas}`);
  return tareaProcesada;
};

// Ejemplo de uso
agregarAlFinal("Tarea 1");
agregarAlFinal("Tarea 2");
removerDelInicio(); // Tarea 1 eliminada
removerDelInicio(); // Tarea 2 eliminada
removerDelInicio(); // Cola vacía
