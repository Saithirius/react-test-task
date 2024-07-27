import {createSelector, createSlice} from '@reduxjs/toolkit'

const cartInitialState = {
  products: new Set(),
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addProduct: (state, action) => {
      if (typeof action.payload !== 'string') action.payload = JSON.stringify(action.payload)
      console.log(typeof state.products, state.products)
      state.products.add(action.payload)
    },
    removeProduct: (state, action) => {
      if (typeof action.payload !== 'string') action.payload = JSON.stringify(action.payload)
      state.products.delete(action.payload)
    },
  },
})

export const cartActions = cartSlice.actions

export const selectCartProducts = createSelector(
  [(state) => state.cart.products],
  (products) => Array.from(products).map(JSON.parse)
)