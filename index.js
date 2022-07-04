const express = require('express');
const conectarBaseDeDatos = require('./config/db')

const aplicacion = express();  
conectarBaseDeDatos()

aplicacion.use(express.json());

aplicacion.use('/api', require('./routes/proyecto_rutas'))

aplicacion.listen(process.env.PORT || 80, () => {
    console.log("Listening on port 80");
  });
