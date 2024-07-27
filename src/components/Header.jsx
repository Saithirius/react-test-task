import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import React from 'react'

const Header = () => {
  const cartProductCount = useSelector(state => state.cart.products.size)

  return (
    <header className="App-header">
      <nav>
        <Link to={'/products'}>Товары</Link>
        <Link to={'/cart'}>Корзина {cartProductCount > 0 ? `(${cartProductCount})` : ''}</Link>
      </nav>
    </header>
  )
}

export default Header