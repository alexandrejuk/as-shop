import React, { memo } from 'react'
import PropTypes from 'prop-types'
import {
  Title,
} from '../..'
import styles from './style.module.css'
import getInitiais from '../../../utils'

const CardContact = ({
  title,
  subtitle,
  phone,
}) => {
  return (
    <div className={styles.content}>
      <div className={styles.avatar}>
        {getInitiais(title)}
      </div>
      <div className={styles.infoWrapper}>
        <div className={styles.info}>
          <Title
            color="codGray"
            text={title}
            size="small"
          />
          <div className={styles.contacts}>
            <Title
              color="scorpion"
              text={subtitle}
              size="xsmall"
            />
            <span className={styles.dotSeparator} />
            <Title
              color="scorpion"
              text={phone}
              size="xsmall"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

CardContact.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
}

export default memo(CardContact)
