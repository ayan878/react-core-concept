import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemList: [],
  totalQuantity: 0,
  showCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.price += newItem.price;
      } else {
        state.itemList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
      }
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.itemList.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.itemList = state.itemList.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.price -=
            existingItem.price / (existingItem.quantity + 1);
        }
        state.totalQuantity--;
      }
    },
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const { addToCart, removeFromCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;
