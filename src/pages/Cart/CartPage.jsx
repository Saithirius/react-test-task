import React from 'react'
import styles from './CartPage.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import ProductCard from './components/ProductCard'
import {cartActions} from '../../store/reducers/cart'

const CartPage = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.cart.products)

  const onRemove = (i) => {
    dispatch(cartActions.removeProductFromInd(i))
  }

  return (
    <main className={styles.page}>
      <h2>Корзина</h2>
      <div className={styles.productsContainer}>
        {products.map((p, i) => <ProductCard key={i} {...p} onRemove={() => onRemove(i)}/>)}
      </div>
    </main>
  )
}

export default CartPage
