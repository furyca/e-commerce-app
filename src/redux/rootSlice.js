import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  favourites: [],
  cart: [],
  product: null,
  mode: "light",
};

export const fetchData = createAsyncThunk("getData", async () => {
  const response = await axios.get("https://fakestoreapi.com/products/category/electronics");

  return response.data;
});

export const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    decreaseCartItem: (state, action) => {
      const { amount, id } = action.payload;
      if (amount === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
        return;
      }

      state.cart = state.cart.map((item) => (item.id === id ? { ...item, amount: amount - 1 } : item));
    },
    increaseCartItem: (state, action) => {
      const { amount, id } = action.payload;
      state.cart = state.cart.map((item) => (item.id === id ? { ...item, amount: amount + 1 } : item));
    },
    toggleFavourite: (state, action) => {
      const { id } = action.payload;
      const item = state.data.find((product) => product.id === +id);

      if (state.favourites.find((product) => product.id === +id)) {
        state.favourites = state.favourites.filter((product) => product.id !== +id);
        return;
      }

      state.favourites = [...state.favourites, item];
    },
    addToCart: (state, action) => {
      const { amount, id } = action.payload;
      const item = state.data.find((product) => product.id.toString() === id);

      state.cart = [...state.cart, { ...item, amount: amount }];
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((product) => product.id.toString() !== id);
    },
    setProduct: (state, action) => {
      const { item } = action.payload;
      state.product = item;
    },
    switchTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {
  decreaseCartItem,
  increaseCartItem,
  toggleFavourite,
  addToCart,
  removeFromCart,
  setProduct,
  switchTheme,
} = rootSlice.actions;
export default rootSlice.reducer;
