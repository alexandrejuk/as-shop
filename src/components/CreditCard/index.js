import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Title } from '../'
import ChipIcon from '../../assets/images/icons/chip.png'
import TagIcon from  '../../assets/images/icons/tag.png'
import styles from './style.module.css'

const defaultValueCredidCard = {
  brand: 'Cartão de crédito',
  name: 'Nome',
  valid: 'Validade',
}

const CreditCard = ({
  cardValid,
  cardHolderName,
  cardNumber,
}) => {
  const {
    brand,
    name,
    valid,
  } = defaultValueCredidCard
  return (
    <div className={styles.creditCard}>
      <div className={styles.creditCardBrand}>
        <Title
          color="white"
          text={brand}
          size="small"
        />
      </div>
      <div className={styles.chipIcon}>
        <img src={ChipIcon} alt="chip logo" />
        <img src={TagIcon} alt="tag rfid" />
      </div>
      <div className={styles.cardNumber}>
        <Title
          color="white"
          font="sourceCodePro"
          text={cardNumber}
          size="big"
        />
      </div>
      <div className={styles.cardCreditInfo}>
        <div className={styles.cardHolderName}>
          <Title
            color="white"
            text={name}
            size="small"
          />
          <Title
            color="white"
            text={cardHolderName}
            size="small"
          />
        </div>
        <div className={styles.cardHolderName}>
          <Title
            color="white"
            text={valid}
            size="small"
          />
          <Title
            color="white"
            font="sourceCodePro"
            text={cardValid}
            size="small"
          />
        </div>
      </div>
    </div>
  )
}

CreditCard.propTypes = {
  cardValid: PropTypes.string.isRequired,
  cardHolderName: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
}

export default memo(CreditCard)
