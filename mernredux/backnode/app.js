const express = require('express');
const app = express();
const cors = require('cors');

// configs
app.set('port', process.env.PORT || 4000);

app.use(cors({origin: '*' }));
app.use(express.json());

//routes
app.use('/libros', require('./routes/Libros'));

module.exports = app;