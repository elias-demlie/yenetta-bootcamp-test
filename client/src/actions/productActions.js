import axios from 'axios';
import { apiEndpoint } from '../constant/apiEndpoint';
import { addProduct, deleteProduct, setProducts } from '../reducers/products';

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await axios.get(`${apiEndpoint}/api/products`);
        dispatch(setProducts(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const createProduct = (product) => async (dispatch) => {
    try {
        const response = await axios.post(`${apiEndpoint}/api/products`, product);
        dispatch(addProduct(response.data));
    } catch (error) {
        console.error(error);
    }
};

export const updateProduct = (id, updatedProduct) => async (dispatch) => {
    try {
        const response = await axios.put(`${apiEndpoint}/api/products/${id}`, updatedProduct);
        dispatch(updateProduct({ id, updatedProduct: response.data }));
    } catch (error) {
        console.error(error);
    }
};

export const removeProduct = (id) => async (dispatch) => {
    try {
        await axios.delete(`${apiEndpoint}/api/products/${id}`);
        dispatch(deleteProduct(id));
    } catch (error) {
        console.error(error);
    }
};
