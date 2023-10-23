import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Import Route and Link
import './App.css';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="navbar">
      <Link to="/">All Product List</Link>
      <Link to="/add">Add Product</Link>
    </div>
         
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/add" element={<ProductForm />} />
          <Route path="/edit/:id" element={<ProductForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
