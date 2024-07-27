import React from 'react'
import styles from './ProductCard.module.scss'
import {useGetProductQuery, useGetSizesQuery} from '../../../store/api'
import {Link} from 'react-router-dom'

const ProductCard = ({ onRemove, productId, colorId, sizeId }) => {
  const { data: product, ...productReq } = useGetProductQuery(productId)
  const { data: sizes, ...sizesReq } = useGetSizesQuery()

  const error = productReq.error || sizesReq.error
  const isLoading = productReq.isLoading || sizesReq.isLoading

  const color = product?.colors.find(c => c.id === colorId)
  const size = sizes?.find(s => s.id === sizeId)

  return (
    <article className={styles.card}>
      {error ? (
        <>Что-то пошло не так</>
      ) : isLoading ? (
        <>Загрузка...</>
      ) : product && sizes && color && size ? (
        <>
          <img src={color.images[0]} alt={product.name}/>
          <Link to={'/products/' + productId}><h3>{product.name}</h3></Link>
          <p>Цвет: {color.name}</p>
          <p>Размер: {size.label} / {size.number}</p>
          <p>Цена: {color.price}</p>
          <button onClick={onRemove}>Удалить</button>
        </>
      ) : null}
    </article>
  )
}

export default ProductCard
