import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, updateProduct } from '../actions/productActions';
import { Link, useParams, useNavigate } from 'react-router-dom';

import '../styles.css'; 


function ProductForm() {
  const { id } = useParams(); // Get the product _id from the URL
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const editProduct = products.find((product) => product._id === id); // Find the product to edit
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: '',
    productDescription: '',
    price: 0,
    quantityInStock: 0,
    isAvailable: true,
  });

  useEffect(() => {
    if (editProduct) {
      // If we're editing a product, populate the form with its data
      setFormData({
        productName: editProduct.productName,
        productDescription: editProduct.productDescription,
        price: editProduct.price,
        quantityInStock: editProduct.quantityInStock,
        isAvailable: editProduct.isAvailable,
      });
    }
  }, [editProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editProduct) {
      // If we're editing, update the existing product
      dispatch(updateProduct(editProduct._id, formData));
    } else {
      // If we're adding a new product, create it
      dispatch(createProduct(formData));
    }

    // Reset the form
    setFormData({
      productName: '',
      productDescription: '',
      price: 0,
      quantityInStock: 0,
      isAvailable: true,
    });
    navigate('/');
  };

  return (
    <div className="product-form">
      <div className="form-container">
        <h2>{editProduct ? 'Edit Product' : 'Add Product'}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Product Name:
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
            />
          </label>
          <label>
            Description:
            <textarea
              name="productDescription"
              value={formData.productDescription}
              onChange={(e) => setFormData({ ...formData, productDescription: e.target.value })}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
            />
          </label>
          <label>
            Quantity in Stock:
            <input
              type="number"
              name="quantityInStock"
              value={formData.quantityInStock}
              onChange={(e) => setFormData({ ...formData, quantityInStock: parseInt(e.target.value) })}
            />
          </label>
          <label>
            Available:
            <input
              type="checkbox"
              name="isAvailable"
              checked={formData.isAvailable}
              onChange={(e) => setFormData({ ...formData, isAvailable: e.target.checked })}
            />
          </label>
          <button type="submit" className="form-submit-button">
            {editProduct ? 'Save' : 'Add'}
          </button>
        </form>
      </div>
      <div className="link-button">
        <Link to="/">Back to Product List</Link>
      </div>
    </div>
  );
}

export default ProductForm;