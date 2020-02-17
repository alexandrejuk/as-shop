import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '../../../components'

export default {
  title: 'Components/Button',
}

const buttonText = 'click me!'

export const Default = () => (
  <Button
    color="primary"
    onClick={action('on click!')}
  >
    {buttonText}
  </Button>
)

export const Outline = () => (
  <Button
    onClick={action('on click!')}
  >
    {buttonText}
  </Button>
)
