import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {
  CardProduct,
  CardSeller,
} from '../'
import styles from './style.module.css'

const Card = ({
  action,
  amount,
  data,
  id,
  image,
  title,
  subtitle,
  status,
  quantity,
  type,
}) => {
  const onClick = value => () => action(value)
  const CardComponent = (
    type === 'product'
     ? CardProduct
     : CardSeller
  )

  return (
    <div
      onClick={onClick(id)}
      className={styles.card}
    >
      <CardComponent
        amount={amount}
        data={data}
        image={image}
        title={title}
        subtitle={subtitle}
        status={status}
        quantity={quantity}
      />
    </div>
  )
}

Card.propTypes = {
  action: PropTypes.func,
  amount: PropTypes.string,
  data: PropTypes.string,
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'product',
    'seller',
  ]).isRequired,
  subtitle: PropTypes.string,
  status: PropTypes.string,
  quantity: PropTypes.string,
}

Card.default = {
  action: null,
  amount: null,
  data: null,
  image: null,
  subtitle: null,
  quantity: null,
  status: null,
}

export default memo(Card)
