import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Header,
  Title,
} from '../../components'
import styles from './style.module.css'
import { parserCurrentBR } from '../../utils'

const pageTitle = 'DETALHES'
const buttonText = 'Adicionar ao carrinho'
const description = 'Descrição'

const ProductDetail = ({
  addCart,
  goBack,
  product,
}) => {
  const {
    amount,
    id,
    images,
    title,
    subtitle,
  } = product
  const addItem = id => () => addCart(id)
  return (
    <div className={styles.main}>
      <Header
        goBack={goBack}
        title={pageTitle}
      />
      <div className={styles.sectionProduct}>
        <div className={styles.productTitle}>
          <Title
            color="codGray"
            text={title}
            size="small"
            type="bold"
          />
          <Title
            color="codGray"
            text={parserCurrentBR(amount)}
            size="small"
            type="bold"
          />
        </div>
        <div className={styles.slider}>
          <div className={styles.imageSlider}>
            <img src={images[0]} alt="product" />
          </div>
          <div className={styles.imageWrapper}>
            {images.map(image => (
              <div className={styles.productImage}>
                <img src={image} alt="product" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.actionButton}>
        <Button
          color="primary"
          onClick={addItem(id)}
        >
          {buttonText}
        </Button>
      </div>
      <div className={styles.sectionProduct}>
        <div className={styles.productDescription}>
          <Title
            color="codGray"
            text={description}
            size="small"
            type="bold"
          />
          <div className={styles.mt20}>
            <Title
              color="scorpion"
              text={subtitle}
              size="medium"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

ProductDetail.propTypes = {
  addCart: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  product: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]).isRequired,
    images: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired
}

export default ProductDetail
