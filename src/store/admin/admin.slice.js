import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    product: {
      name: '',
      category: '',
      subtitle: '',
      description: '',
      aditionalInfo: '',
      price: '',
      inventory: 0,
      imageUrl: '',
    },
  },
  reducers: {
    setProductInfo: (state, action) => {
      state.product = action.payload;
    },
  },
});

export default adminSlice;
