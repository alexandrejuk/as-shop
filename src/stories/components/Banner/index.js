import React from 'react'
import { Banner } from '../../../components'

export default {
  title: 'Components/Banner',
}

const image = 'https://wallpaperaccess.com/full/171714.jpg'

export const Default = () => (
  <Banner
    image={image}
  />
)
