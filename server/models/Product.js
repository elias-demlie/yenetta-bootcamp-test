const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: String,
    productDescription: String,
    price: Number,
   quantityInStock: Number,
   isAvialable: Boolean, 
});

module.exports = mongoose.model('Product', productSchema);