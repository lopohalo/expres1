import cors from 'cors'
const express = require('express');
const conectarBaseDeDatos = require('./config/db')
require('dotenv').config({path:"config.env"})

const aplicacion = express();  
conectarBaseDeDatos()
const whitelist = [process.env.Fronted]
const corsoptions = {
    origin: function(origin, callback) {
        if(whitelist.includes(origin)){
            callback(null, true)
        }else {
            callback(new Error('error de cors'))
        }
    }
}
app.use(cors(corsoptions));

aplicacion.use(express.json());

aplicacion.use('/api', require('./routes/proyecto_rutas'))

aplicacion.listen(process.env.PORT || 80, () => {
  console.log("Listening on port 80");
});
