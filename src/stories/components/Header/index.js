import React from 'react'
import { action } from '@storybook/addon-actions'

import SettingsIcon from '../../../assets/icons/settings.svg'
import SettingsWhiteIcon from '../../../assets/icons/settings-white.svg'

import { Header } from '../../../components'
import styles from './style.module.css'

export default {
  title: 'Components/Header',
}

const title = 'Alexandre'

export const Default = () => (
  <div className={styles.container}>
    <Header
      title={title}
    />
  </div>
)

export const DefaultGoBack = () => (
  <div className={styles.container}>
    <Header
      goBack={action('go back!')}
      title={title}
    />
  </div>
)

export const DefaultActions = () => (
  <div className={styles.container}>
    <Header
      action={action('Action')}
      actionIcon={SettingsIcon}
      goBack={action('go back!')}
      title={title}
    />
  </div>
)

export const Primary = () => (
  <div className={styles.container}>
    <Header
      color="primary"
      title={title}
    />
  </div>
)

export const PrimaryGoBack = () => (
  <div className={styles.container}>
    <Header
      color="primary"
      goBack={action('go back!')}
      title={title}
    />
  </div>
)

export const PrimaryActions = () => (
  <div className={styles.container}>
    <Header
      action={action('Action')}
      actionIcon={SettingsWhiteIcon}
      color="primary"
      goBack={action('go back!')}
      title={title}
    />
  </div>
)
