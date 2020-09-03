import { createSlice } from '@reduxjs/toolkit';

const catalogueSlice = createSlice({
  name: 'admin',
  initialState: {
    products: [],
  },
  reducers: {
    getProducts: (state, action) => {},
    getProductsSuccess: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default catalogueSlice;
