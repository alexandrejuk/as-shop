import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {
  CardContact,
  CardProduct,
  CardSeller,
} from '../'
import styles from './style.module.css'

const chooseCard = type => {
  switch (type) {
    case 'product':
      return CardProduct
    case 'contact':
      return CardContact
    default:
      return CardSeller
  }
}

const Card = ({
  action,
  amount,
  data,
  id,
  image,
  phone,
  quantity,
  subtitle,
  status,
  title,
  type,
}) => {
  const onClick = value => () => action(value)
  const CardComponent = chooseCard(type)
  return (
    <div
      onClick={onClick(id)}
      className={styles.card}
    >
      <CardComponent
        amount={amount}
        data={data}
        image={image}
        phone={phone}
        quantity={quantity}
        subtitle={subtitle}
        status={status}
        title={title}
      />
    </div>
  )
}

Card.propTypes = {
  action: PropTypes.func,
  amount: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  data: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  image: PropTypes.string,
  phone: PropTypes.string,
  quantity: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  subtitle: PropTypes.string,
  status: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'contact',
    'product',
    'seller',
  ]).isRequired,
}

Card.default = {
  action: null,
  amount: null,
  data: null,
  image: null,
  phone: null,
  quantity: 1,
  subtitle: null,
  status: null,
}

export default memo(Card)
