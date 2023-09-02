const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const secretKey = process.env.JWT_SECRET;
const pool = require('../config/db'); // Importa la conexión a la base de datos

// Controlador para el inicio de sesión
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Realiza una consulta a la base de datos para encontrar al usuario por nombre de usuario
    const query = 'SELECT * FROM Usuarios WHERE nombre_usuario = ?';
    const [results] = await pool.query(query, [username]);

    if (results.length > 0) {
      const usuarioAutenticado = results[0];

      // Compara la contraseña proporcionada con el hash almacenado
      const passwordMatch = await bcrypt.compare(password, usuarioAutenticado.contrasena_hash);

      if (passwordMatch) {
        const payload = {
          user: {
            id: usuarioAutenticado.id,
            // Otros datos del usuario que quieras incluir en el token
          },
        };

        const token = jwt.sign(payload, secretKey, { expiresIn: process.env.JWT_EXPIRES });
        return res.json({ token });
      } else {
        return res.status(401).json({ msg: 'Credenciales incorrectas' });
      }
    } else {
      return res.status(401).json({ msg: 'Usuario no encontrado' });
    }
  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    return res.status(500).json({ msg: 'Error en el servidor' });
  }
};

module.exports = {
  login,
};