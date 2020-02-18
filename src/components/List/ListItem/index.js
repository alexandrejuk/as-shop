import React, { Fragment } from "react"
import PropTypes from 'prop-types'

import { Title } from '../../'
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg'
import styles from './style.module.css'

const ListItem = ({
  icon: Icon,
  subtitle,
  title,
}) => (
  <Fragment>
    <div className={styles.listContent}>
      <div className={styles.listIcon}>
        <img src={Icon} alt="informations" />
      </div>
      <div className={styles.listInfo}>
        <Title
          color='codGray'
          size='small'
          text={title}
        />
        <Title
          color='scorpion'
          size='xsmall'
          text={subtitle}
        />
      </div>
    </div>
    <div className={styles.actionRight}>
      <img src={ArrowRightIcon} alt="arrow right" />
    </div>
  </Fragment>
)

ListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default ListItem
