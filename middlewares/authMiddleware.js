const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET; // Define tu clave secreta en el archivo .env

module.exports = (req, res, next) => {

  const authorization = req.headers.authorization;

  const token = authorization.split(' ')[1];
  
  //return console.log(req.headers.authorization);

  if (!token) {
    return res.status(401).json({ msg: 'Token no válido, autorización denegada' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token no válido' });
  }
};