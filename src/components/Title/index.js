import React, { memo } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './style.module.css'

const Title = ({
  color,
  font,
  text,
  type,
  size,
}) => {
  const titleStyle = classNames(
    styles[color],
    styles[font],
    styles.title,
    styles[type],
    styles[size],
  )
  return (
    <h1
      className={titleStyle}
    >
      {text}
    </h1>
  )
}

Title.propTypes = {
  color: PropTypes.oneOfType([
    'codGray',
    'scorpion',
    'white',
  ]),
  font: PropTypes.oneOfType(['sourceCodePro']),
  text: PropTypes.oneOfType([
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  type: PropTypes.oneOfType(['bold']),
  size: PropTypes.oneOfType([
    'big',
    'large',
    'medium',
    'small',
    'xsmall',
  ]).isRequired,
}

Title.default = {
  color: null,
  font: null,
  type: null,
}

export default memo(Title)
