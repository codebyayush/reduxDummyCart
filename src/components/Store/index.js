import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCartState = { cartToggle: false, cartArr: [], quantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    toggleCart(state) {
      state.cartToggle = !state.cartToggle;
    },
    addToCart(state, action) {
      state.cartArr.push(action.payload);
    },
    plusOne(state, action) {
      state.quantity++;
    },
    minusOne(state, action) {
      if (state.quantity === 0) {
        state.cartArr = [];
      }
      state.quantity--;
    },
  },
});

export const cartActions = cartSlice.actions;

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export default store;
