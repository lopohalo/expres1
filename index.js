
const cors = require('cors')
const express = require('express');
const conectarBaseDeDatos = require('./config/db')


const aplicacion = express();  
conectarBaseDeDatos()
const whitelist = ["https://effulgent-klepon-812c50.netlify.app"]
const corsoptions = {
    origin: function(origin, callback) {
        console.log(origin)
        if(whitelist.includes(origin)){
            callback(null, true)
        }else {
            callback(new Error('error de cors'))
        }
    }
}
aplicacion.use(cors(corsoptions));

aplicacion.use(express.json());

aplicacion.use('/api', require('./routes/proyecto_rutas'))

aplicacion.listen(process.env.PORT || 4000, () => {
  console.log("Listening on port 80");
});
