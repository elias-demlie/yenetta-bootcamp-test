const mongoose = require('mongoose');
require('dotenv').config();

const { MONGODB_URI } = process.env;
 
mongoose.connect(
    MONGODB_URI
    , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'monggodb connected error'));
db.once('Open', () => {
    console.log('Connected to MongoDB');
});

module.exports = mongoose;