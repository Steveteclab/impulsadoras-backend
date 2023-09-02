// Importa el módulo Express para crear las rutas
const express = require('express');
const router = express.Router();

// Importa los controladores y middlewares necesarios
const usuarioController = require('../controllers/controller');
const authMiddleware = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController');

// Rutas de la Aplicación

// Ruta para la autenticación y generación del token
// POST /api/login
router.post('/login', authController.login);

// Rutas protegidas con el middleware de autenticación
// Todas las rutas a continuación requerirán un token válido

// Crear un nuevo usuario
// POST /api/usuarios
router.post('/usuarios', authMiddleware, usuarioController.insertUsuario);

// Obtener información de un usuario por su ID
// GET /api/tracking/:id
router.get('/tracking/:id', authMiddleware, usuarioController.selectTracking);

// Actualizar información de un usuario por su ID
// PUT /api/usuarios/:id
router.put('/usuarios/:id', authMiddleware, usuarioController.updateUsuario);

// Eliminar un usuario por su ID
// DELETE /api/usuarios/:id
router.delete('/usuarios/:id', authMiddleware, usuarioController.deleteUsuario);

// Exporta el router con las rutas configuradas
module.exports = router;