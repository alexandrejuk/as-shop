import React from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const Input = ({
  disabled,
  name,
  placeholder,
  type,
  value,
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

Input.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'email',
    'number',
    'phone',
    'text',
  ]).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
}

Input.defaultProps = {
  disabled: false,
  value: '',
}

export default Input
