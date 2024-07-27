import React, {useEffect, useState} from 'react'
import styles from './Gallery.module.scss'
import classNames from 'classnames'

const Gallery = ({ images, className }) => {
  const [selectedImgInd, setSelectedImgInd] = useState(0)

  useEffect(() => {
    setSelectedImgInd(0)
  }, [images])

  return (
    <div className={classNames(styles.gallery, className)}>
      <div className={styles.mainImage}>
        <img src={images[selectedImgInd]} alt="Selected"/>
      </div>
      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <img key={index} src={image} alt="Thumbnail"
               className={classNames(styles.thumbnail, { [styles.active]: selectedImgInd === index })}
               onClick={() => setSelectedImgInd(index)}/>
        ))}
      </div>
    </div>
  )
}

export default Gallery
