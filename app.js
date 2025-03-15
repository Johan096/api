const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Importamos las funciones del gestor de tareas
const { addTask, listTasks, removeTask, updateTask } = require('./tasks');

// Middleware para parsear JSON en las peticiones
app.use(express.json());

/**
 * Ruta para crear una tarea
 * Método: POST
 * Endpoint: /crear
 * Body: { task: "Texto de la tarea" }
 */
app.post('/crear', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'El campo "task" es requerido.' });
  }
  addTask(task);
  res.status(201).json({ message: 'Tarea creada exitosamente', task });
});

/**
 * Ruta para eliminar una tarea por índice
 * Método: DELETE
 * Endpoint: /eliminar/:index
 */
app.delete('/eliminar/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (isNaN(index)) {
    return res.status(400).json({ error: 'El índice debe ser un número.' });
  }
  removeTask(index);
  res.json({ message: 'Tarea eliminada exitosamente', index });
});

/**
 * Ruta para actualizar una tarea
 * Método: PUT
 * Endpoint: /actualizar/:index
 * Body: { newTask: "Nuevo contenido de la tarea" }
 */
app.put('/actualizar/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const { newTask } = req.body;
  if (isNaN(index)) {
    return res.status(400).json({ error: 'El índice debe ser un número.' });
  }
  if (!newTask) {
    return res.status(400).json({ error: 'El campo "newTask" es requerido.' });
  }
  updateTask(index, newTask);
  res.json({ message: 'Tarea actualizada exitosamente', index, newTask });
});

/**
 * Ruta para modificar una tarea
 * Método: PATCH
 * Endpoint: /modificar/:index
 * Body: { newTask: "Nuevo contenido de la tarea" }
 * Nota: En este ejemplo, "modificar" realiza la misma acción que "actualizar".
 */
app.patch('/modificar/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const { newTask } = req.body;
  if (isNaN(index)) {
    return res.status(400).json({ error: 'El índice debe ser un número.' });
  }
  if (!newTask) {
    return res.status(400).json({ error: 'El campo "newTask" es requerido.' });
  }
  updateTask(index, newTask);
  res.json({ message: 'Tarea modificada exitosamente', index, newTask });
});

/**
 * Ruta opcional para listar las tareas (útil para pruebas)
 * Método: GET
 * Endpoint: /listar
 */
app.get('/listar', (req, res) => {
  res.json({ tasks: listTasks() });
});

// Iniciamos el servidor
app.listen(port, () => {
  console.log(`API ejecutándose en el puerto ${port}`);
});
