import {createSlice} from '@reduxjs/toolkit'

const cartInitialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: cartInitialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload)
    },
    removeProductFromInd: (state, action) => {
      state.products.splice(action.payload, 1)
    },
  },
})

export const cartActions = cartSlice.actions