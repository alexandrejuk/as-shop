import React from 'react'
import { action } from '@storybook/addon-actions'

import SettingsIcon from '../../../assets/icons/settings.svg'
import SettingsWhiteIcon from '../../../assets/icons/settings-white.svg'

import { Header } from '../../../components'

export default {
  title: 'Components/Header',
}

const title = 'Alexandre'

export const Default = () => (
  <Header
    title={title}
  />
)

export const DefaultGoBack = () => (
  <Header
    goBack={action('go back!')}
    title={title}
  />
)

export const DefaultActions = () => (
  <Header
    action={action('Action')}
    actionIcon={SettingsIcon}
    goBack={action('go back!')}
    title={title}
  />
)

export const Primary = () => (
  <Header
    color="primary"
    title={title}
  />
)

export const PrimaryGoBack = () => (
  <Header
    color="primary"
    goBack={action('go back!')}
    title={title}
  />
)

export const PrimaryActions = () => (
  <Header
    action={action('Action')}
    actionIcon={SettingsWhiteIcon}
    color="primary"
    goBack={action('go back!')}
    title={title}
  />
)
