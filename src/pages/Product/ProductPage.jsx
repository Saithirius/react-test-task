import React from 'react'
import {useParams} from 'react-router-dom'
import {useGetProductQuery, useGetSizesQuery} from '../../store/api'
import ProductForm from './ProductForm'

const ProductPage = () => {
  const params = useParams()
  const id = parseInt(params.id)

  const { data: product, ...productReq } = useGetProductQuery(id)
  const { data: sizes, ...sizesReq } = useGetSizesQuery()

  const error = productReq.error || sizesReq.error
  const isLoading = productReq.isLoading || sizesReq.isLoading

  return (
    <main>
      {error ? (
        <>Что-то пошло не так</>
      ) : isLoading ? (
        <>Загрузка...</>
      ) : product && sizes ? (
        <ProductForm product={product} sizes={sizes}/>
      ) : null}
    </main>
  )
}

export default ProductPage
