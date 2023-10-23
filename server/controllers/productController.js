const Product = require('../models/Product');

//create a new product 
const cretaeProduct = async (req, res)=> {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);

    } catch (error){
        res.status(500).json({error: 'Unable to create  the product '});


    }
}

//Get all list of procuts 
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch( error){
        res.status(500).json({error: 'Unable to fetchc products'});

    }
};


// update product
const updateProduct = async (req, res)=>{
try{
const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
res.status(200).json(product);

}
catch (error){
    res.status(500).json({error: 'unable to ypdate product'});

}
}

//Delete a product

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndRemove(req.params.id);      
        res.status(204).end();
      console.log("successfylly deleted");
    } catch (error) {
      res.status(500).json({ error: 'Unable to delete the product' });
    }
  };
  
  module.exports = {
    cretaeProduct,
    getProducts,
    updateProduct,
    deleteProduct
  };