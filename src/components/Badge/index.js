import React, { memo } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import styles from './style.module.css'

const Badge = ({
  color,
  text,
}) => {
  const badgeStyle = classNames(
    styles.badge,
    styles[color],
  )
  return (
    <div className={badgeStyle}>
      {text}
    </div>
  )
}

Badge.propTypes = {
  color: PropTypes.oneOf([
    'chestnutRose',
    'danube',
  ]).isRequired,
  text: PropTypes.string.isRequired,
}

export default memo(Badge)
