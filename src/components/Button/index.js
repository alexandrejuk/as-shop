import React, { memo } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const Button = ({
  color,
  children,
  onClick,
}) => {
  const buttonStyle = classNames(
    styles.button,
    styles[color],
  )
  return (
    <button
      className={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.oneOfType([
    'primary',
  ]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

Button.default = {
  color: 'primary',
}

export default memo(Button)
