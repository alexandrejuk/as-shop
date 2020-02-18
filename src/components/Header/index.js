import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Title } from '../'
import ArrowIcon from '../../assets/icons/arrow.svg'
import ArrowWhiteIcon from '../../assets/icons/arrow-white.svg'

import styles from './style.module.css'


const Header = ({
  actionIcon,
  action,
  color,
  goBack,
  title,
}) => {
  const headerStyle = classNames(
    styles.header,
    styles[color],
  )
  const titleColor = (
    color === 'primary'
      ? 'white'
      : 'shark'
  )

  const IconGoBack = (
    color === 'primary'
      ? ArrowWhiteIcon
      : ArrowIcon
  )
  return (
    <div className={headerStyle}>
      <div className={styles.leftAction}>
        { goBack && (
          <button
            className={styles.arrow}
            onClick={goBack}
          >
            <img
              alt="arrow left"
              height={24}
              src={IconGoBack}
              width={24}
            />
          </button>
        )}
      </div>
      <div className={styles.headerTitle}>
        <Title
          color={titleColor}
          text={title}
          size="medium"
        />
      </div>
      <div className={styles.rightAction}>
        { action && (
          <button
            className={styles.iconAction}
            onClick={action}
          >
            <img
              alt="settings"
              height={24}
              src={actionIcon}
              width={24}
            />
          </button>
        )}
      </div>
    </div>
  )
}

Header.propTypes = {
  action: PropTypes.func,
  color: PropTypes.oneOf([
    'default',
    'primary',
  ]),
  goBack: PropTypes.func,
  title: PropTypes.string.isRequired,
}

Header.defaultProps = {
  action: null,
  color: 'default',
  goBack: null,
}

export default Header
