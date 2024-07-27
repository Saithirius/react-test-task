import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {productsApi} from './api'
import storage from 'redux-persist/lib/storage'
import {enableMapSet} from 'immer'
import {cartSlice} from './reducers/cart'
import {createTransform, persistReducer, persistStore} from 'redux-persist'

enableMapSet()

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
  transforms: [createTransform(
    (state) => ({ ...state, products: Array.from(state.products) }),
    (state) => ({ ...state, products: new Set(state.products) }),
    { whitelist: ['cart'] },
  )]
}

const rootReducer = combineReducers({
  [productsApi.reducerPath]: productsApi.reducer,
  cart: cartSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(productsApi.middleware),
})

export const persistor = persistStore(store)