import React from 'react'
import PropTypes from 'prop-types'
import styles from './style.module.css'
import ListItem from './ListItem'

const List = ({
  action,
  items,
}) => {
  return (
    <div className={styles.list}>
      {items.map(item => (
        <div
          className={styles.listItem}
          onClick={action}
        >
          <ListItem {...item} />
        </div>
      ))}

    </div>
  )
}

List.propTypes = {
  action: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default List
