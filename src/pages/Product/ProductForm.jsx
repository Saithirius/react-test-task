import React, {useEffect, useState} from 'react'
import styles from './ProductForm.module.scss'
import {useDispatch} from 'react-redux'
import {cartActions} from '../../store/reducers/cart'
import Gallery from '../../components/Gallery/Gallery'

const ProductForm = ({ product, sizes }) => {
  const dispatch = useDispatch()

  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState()

  const onSubmit = (e) => {
    e.preventDefault()
    const p = { productId: product.id, colorId: selectedColor.id, sizeId: selectedSize }
    dispatch(cartActions.addProduct(p))
  }

  useEffect(() => {
    if (selectedSize === undefined) {
      setSelectedSize(selectedColor.sizes[0])
    } else {
      const size = selectedColor.sizes.find(s => s === selectedSize)
      setSelectedSize(size ?? selectedColor.sizes[0])
    }
  }, [selectedColor])

  return (
    <section className={styles.container}>
      <div>
        <h2>{product.name}</h2>
        <Gallery images={selectedColor.images} className={styles.gallery}/>
        <p>{selectedColor.description}</p>
      </div>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Цвет</legend>
          {product.colors.map(c => {
            return (
              <label className={styles.radioInput} key={c.id}>
                <input type={'radio'} name={'color'} value={c.id} checked={c.id === selectedColor.id}
                       onChange={e => e.target.checked && setSelectedColor(c)}/>
                {c.name}
              </label>
            )
          })}
        </fieldset>
        <fieldset>
          <legend>Размер</legend>
          {selectedColor.sizes.map(sId => {
            const size = sizes.find(s => s.id === sId)
            return (
              <label className={styles.radioInput} key={sId}>
                <input type={'radio'} name={'size'} value={sId} checked={sId === selectedSize}
                       onChange={e => e.target.checked && setSelectedSize(sId)}/>
                {size.label} / {size.number}
              </label>
            )
          })}
        </fieldset>
        <div>
          <p>Цена: {selectedColor.price}</p>
          <button disabled={!selectedColor || !selectedSize}>В корзину</button>
        </div>
      </form>
    </section>
  )
}

export default ProductForm
