const express = require('express');
const app = express();
const cors = require('cors')

//configuraciones
app.set('port', process.env.PORT || 4000);
//middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());

//rutas
app.use('/productos', require('./routes/Productos'))
app.use('/login', require('./routes/Login'))
module.exports = app;