const mongoose = require('mongoose');

const URI = process.env.MongoDB_URI; 

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database Connected');
    
})