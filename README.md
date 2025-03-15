Documentación de la API del Gestor de Tareas
Esta API se implementa usando Node.js y Express, y gestiona un array en memoria para almacenar las tareas. A continuación se detalla cada endpoint disponible:

Endpoints
1. Crear Tarea
Método HTTP: POST
Ruta: /crear
Descripción:
Agrega una nueva tarea al listado.
Request Body:
Debe ser un objeto JSON que contenga la propiedad:
task (string): Texto de la tarea a agregar.

Ejemplo:
{
  "task": "Aprender Node.js"
}


Respuesta Exitosa (201):
json
Copiar
{
  "message": "Tarea creada exitosamente",
  "task": "Aprender Node.js"
}

Errores:
Si no se envía la propiedad task, se responde con un error 400 y un mensaje:
json
Copiar
{ "error": "El campo \"task\" es requerido." }


2. Eliminar Tarea
Método HTTP: DELETE
Ruta: /eliminar/:index
Descripción:
Elimina una tarea existente a partir del índice que se pasa como parámetro en la URL.
Parámetros URL:
index (número): Posición de la tarea en el array.
Ejemplo de URL: /eliminar/1

Respuesta Exitosa:
json
Copiar
{
  "message": "Tarea eliminada exitosamente",
  "index": 1
}
Errores:
Si el índice no es un número válido, se retorna un error 400:
json
Copiar
{ "error": "El índice debe ser un número." }




3. Actualizar Tarea
Método HTTP: PUT
Ruta: /actualizar/:index
Descripción:
Actualiza el contenido de una tarea existente reemplazándolo completamente por el nuevo contenido.
Parámetros URL:
index (número): Posición de la tarea a actualizar.
Request Body:
Debe ser un objeto JSON que contenga la propiedad:
newTask (string): El nuevo texto que reemplazará la tarea actual.
Ejemplo:

{
  "newTask": "Aprender Node.js avanzado"
}
Respuesta Exitosa:
{
  "message": "Tarea actualizada exitosamente",
  "index": 0,
  "newTask": "Aprender Node.js avanzado"
}
Errores:
Índice no numérico:
{ "error": "El índice debe ser un número." }

Falta la propiedad newTask:
{ "error": "El campo \"newTask\" es requerido." }



4. Modificar Tarea
Método HTTP: PATCH
Ruta: /modificar/:index
Descripción:
Modifica parcialmente una tarea existente. En este ejemplo, el comportamiento es similar al de actualizar, reemplazando el contenido completo.
Parámetros URL:
index (número): Posición de la tarea a modificar.
Request Body:
Debe ser un objeto JSON que contenga la propiedad:
newTask (string): Nuevo contenido para la tarea

Ejemplo:
{
  "newTask": "Aprender Node.js con Express"
}

Respuesta existosa:
{
  "message": "Tarea modificada exitosamente",
  "index": 0,
  "newTask": "Aprender Node.js con Express"
}

Errores:
Índice inválido o no numérico y/o falta de newTask, con mensajes de error similares a los del endpoint /actualizar/:index.


5. Listar Tareas (Ruta Opcional para Pruebas)
Método HTTP: GET
Ruta: /listar
Descripción:
Devuelve un listado de todas las tareas actualmente almacenadas.

Respuesta :
{
  "tasks": [
    "Tarea 1",
    "Tarea 2",
    "Tarea 3"
]
}



enlaces de la api
Deployment:  api-dumyj75sm-johan096s-projects.vercel.app

Domains:https://api-beta-gilt-74.vercel.app/
