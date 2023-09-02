// Importa el módulo Express para crear y configurar el servidor
const express = require('express');
const app = express();
const cors = require('cors'); // Importa el paquete cors

// Configura CORS para permitir todas las solicitudes (esto es un ejemplo, en producción, debes configurarlo de manera más segura)
app.use(cors());

// Importa las rutas de la aplicación
const routes = require('./routes/routes');

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());

// Conecta las rutas a la aplicación
app.use('/api', routes);

// Define el puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3001;

// Inicia el servidor y escucha en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});