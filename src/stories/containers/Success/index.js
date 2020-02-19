import React from 'react'
import { action } from '@storybook/addon-actions'
import SuccessContainer from '../../../containers/Success'
import CelebrationImage from '../../../assets/images/celebration.png'

export default {
  title: 'Containers/Success',
}

const props = {
  image: CelebrationImage,
  title: "Lorem Ipsum is simply dummy",
  message: "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text",
}

export const Default = () => (
  <SuccessContainer
    action={action('navigator to')}
    {...props}
  />
)
