import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'
import { Title } from '../../'
import styles from './style.module.css'
import { parserCurrentBR } from '../../../utils'

const CardProduct = ({
  amount,
  image,
  title,
  subtitle,
  quantity,
}) => {
  const unitary = quantity || 1
  const totalAmount = parserCurrentBR((unitary * amount))
  return (
    <Fragment>
      <div
        className={styles.imageWrapper}
        style={{
          background: `url(${image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
      </div>
      <div className={styles.content}>
        <Title
          color="codGray"
          text={title}
          size="medium"
        />
        <Title
          color="scorpion"
          text={subtitle}
          size="xsmall"
        />
        <div className={styles.price}>
          { quantity && (
            <Title
              color="codGray"
              text={`${quantity} un x `}
              size="xsmall"
            />
          )}&nbsp;
          <Title
            color="codGray"
            text={totalAmount}
            size="xsmall"
          />
        </div>
      </div>
    </Fragment>
  )
}

CardProduct.propTypes = {
  amount: PropTypes.number.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  quantity: PropTypes.number,
}

CardProduct.default = {
  image: null,
  subtitle: null,
  quantity: 1,
}

export default memo(CardProduct)
