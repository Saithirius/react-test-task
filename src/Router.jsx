import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import CatalogPage from './pages/Catalog/CatalogPage'
import ProductPage from './pages/Product/ProductPage'
import CartPage from './pages/Cart/CartPage'

const Router = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to="/products" replace/>}/>
      <Route path={'/products'} element={<CatalogPage/>}/>
      <Route path={'/products/:id'} element={<ProductPage/>}/>
      <Route path={'/cart'} element={<CartPage/>}/>
    </Routes>
  )
}

export default Router
