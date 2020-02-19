import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Title,
} from '../../components'
import styles from './style.module.css'

const buttonText = 'Ir para o login'

const Success = ({
  action,
  image,
  message,
  title,
}) => (
  <div className={styles.container}>
    <div className={styles.title}>
      <Title
        color="codGray"
        size="large"
        text={title}
      />
    </div>
    <div className={styles.message}>
      <Title
        color="scorpion"
        size="small"
        text={message}
      />
    </div>
    <div className={styles.successImage}>
      <img src={image} alt="success" />
    </div>
    <div className={styles.buttonAction}>
      <Button
        color="primary"
        onClick={action}
      >
        {buttonText}
      </Button>
    </div>
  </div>
)

Success.propTypes = {
  action: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
}

export default Success
