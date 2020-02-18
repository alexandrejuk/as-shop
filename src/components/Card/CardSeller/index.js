import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {
  Badge,
  Title,
} from '../..'
import styles from './style.module.css'

const CardSeller = ({
  amount,
  data,
  title,
  status,
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.data}>
        {data}
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <Title
            color="codGray"
            text={title}
            size="medium"
          />
          <Title
            color="codGray"
            text={amount}
            size="medium"
          />
        </div>
        <Badge text={status} color="danube" />
      </div>
    </div>
  )
}

CardSeller.propTypes = {
  amount: PropTypes.number.isRequired,
  data: PropTypes.string,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default memo(CardSeller)
