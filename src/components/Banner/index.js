import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.css'

const Banner = ({
  image,
}) => (
  <div
    className={styles.banner}
    style={{ backgroundImage: `url(${image})` }}
  />
)

Banner.propTypes = {
  image: PropTypes.string.isRequired,
}

export default memo(Banner)
