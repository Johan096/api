// Array para almacenar las tareas
let tasks = [];

// Función para agregar una tarea
const addTask = (task) => {
  tasks.push(task);
  console.log(`Tarea agregada: "${task}"`);
};

// Función para listar las tareas (además de imprimirlas, retorna el array)
const listTasks = () => {
  console.log("Lista de tareas:");
  tasks.forEach((task, index) => {
    console.log(`${index}: ${task}`);
  });
  return tasks;
};

// Función para eliminar una tarea por índice
const removeTask = (index) => {
  if (index >= 0 && index < tasks.length) {
    const removed = tasks.splice(index, 1);
    console.log(`Tarea eliminada: "${removed}"`);
  } else {
    console.log(`Índice inválido: ${index}`);
  }
};

// Función para actualizar (o modificar) una tarea existente
const updateTask = (index, newTask) => {
  if (index >= 0 && index < tasks.length) {
    tasks[index] = newTask;
    console.log(`Tarea actualizada en el índice ${index}: "${newTask}"`);
  } else {
    console.log(`Índice inválido: ${index}`);
  }
};

module.exports = { addTask, listTasks, removeTask, updateTask, tasks };
