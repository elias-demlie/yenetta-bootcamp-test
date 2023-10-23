import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, removeProduct } from '../actions/productActions';
import { Link } from 'react-router-dom';
import '../styles.css';


function ProductList() {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity in Stock</th>
            <th>Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.productName}</td>
              <td>{product.productDescription}</td>
              <td>${product.price}</td>
              <td>{product.quantityInStock}</td>
              <td>{!product.isAvailable ? 'Yes' : 'No'}</td>
              <td>
                <div className="button-row">
                  <Link to={`/edit/${product._id}`}>
                    <button className="edit-button">Edit</button>
                  </Link>
                  <button className="delete-button" onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
