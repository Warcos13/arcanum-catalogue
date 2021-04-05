import { createSlice } from '@reduxjs/toolkit';

const generalSlice = createSlice({
  name: 'general',
  initialState: {
    isLoading: false,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default generalSlice;
