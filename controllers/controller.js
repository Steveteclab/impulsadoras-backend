// Importa el módulo que contiene las funciones de interacción con la base de datos
const modelo = require('../models/modelo');

// Controlador para la manipulación de datos de usuarios
const controller = {
  // Inserta un nuevo usuario en la base de datos
  insertUsuario: async (req, res) => {
    try {
      // Obtiene los datos del usuario desde el cuerpo de la solicitud
      const usuarioData = req.body;
      
      // Llama a la función insertUsuario del modelo para realizar la inserción
      const result = await modelo.insertUsuario(usuarioData);
      
      // Envía la respuesta con el resultado de la inserción
      res.json(result);
    } catch (error) {
      console.error(error);
      // Envía una respuesta de error en caso de fallo en la inserción
      res.status(500).send('Error al insertar el usuario');
    }
  },

  // Obtiene información de usuarios de la base de datos
  selectTracking: async (req, res) => {
    try {
      // Obtiene el ID del usuario desde los parámetros de la solicitud
      const id = req.params.id;
      
      // Llama a la función selectTracking del modelo para obtener la información
      const tracking = await modelo.selectTracking(id);
      
      // Envía la respuesta con la información de los usuarios
      res.json(tracking);
    } catch (error) {
      console.error(error);
      // Envía una respuesta de error en caso de fallo al obtener la información
      res.status(500).send('Error al obtener el tracking');
    }
  },

  // Actualiza la información de un usuario en la base de datos
  updateUsuario: async (req, res) => {
    try {
      // Obtiene el ID del usuario desde los parámetros de la solicitud
      const id = req.params.id;
      // Obtiene el nuevo número de teléfono desde el cuerpo de la solicitud
      const nuevoTelefono = req.body.telefono;
      
      // Llama a la función updateUsuario del modelo para realizar la actualización
      const result = await modelo.updateUsuario(id, nuevoTelefono);
      
      // Envía la respuesta con el resultado de la actualización
      res.json(result);
    } catch (error) {
      console.error(error);
      // Envía una respuesta de error en caso de fallo en la actualización
      res.status(500).send('Error al actualizar el usuario');
    }
  },

  // Elimina un usuario de la base de datos
  deleteUsuario: async (req, res) => {
    try {
      // Obtiene el ID del usuario desde los parámetros de la solicitud
      const id = req.params.id;
      
      // Llama a la función deleteUsuario del modelo para realizar la eliminación
      const result = await modelo.deleteUsuario(id);
      
      // Envía la respuesta con el resultado de la eliminación
      res.json(result);
    } catch (error) {
      console.error(error);
      // Envía una respuesta de error en caso de fallo en la eliminación
      res.status(500).send('Error al eliminar el usuario');
    }
  },
};

// Exporta el controlador para su uso en otros módulos
module.exports = controller;