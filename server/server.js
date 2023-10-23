const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('./db');
const productController = require('./controllers/productController');

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());


// API Routes
app.post('/api/products', productController.cretaeProduct);
app.get('/api/products', productController.getProducts);
app.put('/api/products/:id', productController.updateProduct);
app.delete('/api/products/:id', productController.deleteProduct);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});