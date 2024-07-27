import React from 'react'
import styles from './ProductCard.module.scss'
import {Link} from 'react-router-dom'

const ProductCard = ({ product }) => {
  const imgSrc = product.colors?.[0]?.images?.[0]

  return (
    <Link to={'/products/' + product.id}>
      <article className={styles.card}>
        <img src={imgSrc} alt={product.name}/>
        <h3>{product.name}</h3>
      </article>
    </Link>
  )
}

export default ProductCard
