import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartProducts: [],
    likedItems: [],
  },
  reducers: {
    addProductToStore: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.cartProducts?.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex !== -1) {
        state.cartProducts[existingItemIndex].quantity += 1;
      } else {
        state.cartProducts.push({ ...newItem, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.cartProducts?.findIndex(
        (item) => item.id === itemId
      );

      if (itemIndex !== -1) {
        state.cartProducts[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.id === itemId
      );

      if (itemIndex !== -1) {
        if (state.cartProducts[itemIndex].quantity === 1) {
          state.cartProducts.splice(itemIndex, 1);
        } else {
          state.cartProducts[itemIndex].quantity -= 1;
        }
      }
    },
    toggleLike: (state, action) => {
      const itemId = action.payload;
      const isLiked = state.likedItems.includes(itemId);

      if (isLiked) {
        state.likedItems = state.likedItems.filter((id) => id !== itemId);
      } else {
        state.likedItems.push(itemId);
      }
    },
  },
});

export const getTotalQuantity = (state) =>
  state.cart.cartProducts?.reduce(
    (totalQuantity, product) => totalQuantity + product.quantity,
    0
  );

export const {
  addProductToStore,
  increaseQuantity,
  decreaseQuantity,
  toggleLike,
} = cartSlice.actions;

export default cartSlice.reducer;
