// Importa el módulo para la gestión de variables de entorno desde el archivo .env
require('dotenv').config();

// Importa el módulo mysql2/promise para la conexión y gestión de la base de datos
const mysql = require('mysql2/promise');

// Creación del Pool de Conexiones

// Configura un pool de conexiones usando los valores definidos en el archivo .env
const pool = mysql.createPool({
  host: process.env.DB_HOST,         // Host de la base de datos
  user: process.env.DB_USER,         // Usuario de la base de datos
  password: process.env.DB_PASSWORD, // Contraseña del usuario de la base de datos
  database: process.env.DB_DATABASE  // Nombre de la base de datos
});

// Exporta el pool de conexiones para su uso en otros módulos
module.exports = pool;