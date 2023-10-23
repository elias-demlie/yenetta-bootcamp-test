import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';
import { Provider } from 'react-redux'; // Import Provider
import store from './store'; // Import your Redux store

axios.defaults.baseURL = 'http://localhost:5003'; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}> {/* Wrap your App with Provider */}
     <App />
</Provider>
 );
 