import { createSlice } from '@reduxjs/toolkit';
import { useGetPostsQuery } from './apiSlice';

const productSlice = createSlice({
  name: 'products',
  initialState: { data: null, isLoading: false, error: null },
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setProducts, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;