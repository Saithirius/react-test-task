import React from 'react'
import styles from './CartPage.module.scss'
import {useDispatch, useSelector} from 'react-redux'
import ProductCard from './components/ProductCard'
import {cartActions, selectCartProducts} from '../../store/reducers/cart'

const CartPage = () => {
  const dispatch = useDispatch()
  const cartProducts = useSelector(selectCartProducts)

  const onRemove = (cartProduct) => {
    dispatch(cartActions.removeProduct(cartProduct))
  }

  return (
    <main className={styles.page}>
      <h2>Корзина</h2>
      <div className={styles.productsContainer}>
        {cartProducts.map((p) => <ProductCard key={JSON.stringify(p)} {...p} onRemove={() => onRemove(p)}/>)}
      </div>
    </main>
  )
}

export default CartPage
