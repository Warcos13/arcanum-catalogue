import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    checkoutProducts: [],
    itemWasAdded: false,
  },
  reducers: {
    addProduct: (state, action) => {
      state.checkoutProducts = [
        ...state.checkoutProducts,
        {
          id: action.payload.id,
          imageUrl: action.payload.imageUrl,
          name: action.payload.name,
          subtitle: action.payload.subtitle,
          price: action.payload.price,
          quantity: 1,
        },
      ];
    },
    deleteProduct: (state, action) => {
      state.checkoutProducts = state.checkoutProducts.filter(
        (product) => product.id != action.payload
      );
    },
    substractQuantityProduct: (state, action) => {
      state.checkoutProducts = state.checkoutProducts.map((item) => {
        if (item.id == action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    },
    addQuantityProduct: (state, action) => {
      state.checkoutProducts = state.checkoutProducts.map((item) => {
        if (item.id == action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },
  },
});

export default checkoutSlice;
