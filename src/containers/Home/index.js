import React from 'react'
import PropTypes from 'prop-types'
import {
  Banner,
  Card,
  Header,
} from '../../components'
import styles from './style.module.css'

const title = 'vendeAI'
const image = 'https://wallpaperaccess.com/full/171714.jpg'

const Home = ({
  action,
  items,
}) => {
  return (
    <div className={styles.main}>
      <Header
        title={title}
      />
      <div className={styles.sectionBanner}>
        <Banner
          image={image}
        />
      </div>
      {items.map(item => (
        <Card
          action={action}
          key={item.id}
          {...item}
          type="product"
        />
      ))}
    </div>
  )
}

Home.propTypes = {
  action: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number.isRequired,
      id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}

export default Home
