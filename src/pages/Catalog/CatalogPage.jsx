import React from 'react'
import styles from './CatalogPage.module.scss'
import ProductCard from './components/ProductCard'
import {useGetProductsQuery} from '../../store/api'

const CatalogPage = () => {
  const { data: products, error, isLoading } = useGetProductsQuery()

  return (
    <main className={styles.page}>
      {error ? (
        <>Что-то пошло не так</>
      ) : isLoading ? (
        <>Загрузка...</>
      ) : products ? (
        <section className={styles.productsContainer}>
          {products.map(p => <ProductCard key={p.id} product={p}/>)}
        </section>
      ) : null}
    </main>
  )
}

export default CatalogPage
