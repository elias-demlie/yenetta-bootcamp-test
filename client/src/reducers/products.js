import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: { products: [] },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { id, updatedProduct } = action.payload;
      const productIndex = state.products.findIndex((product) => product._id === id);
      if (productIndex !== -1) {
        state.products[productIndex] = updatedProduct;
      }
    },
    deleteProduct: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((product) => product._id !== id);
    },
  },
});

export const { setProducts, addProduct, updateProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
