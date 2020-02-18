import React from 'react'
import { action } from '@storybook/addon-actions'
import { range } from 'ramda'
import HomeContainer from '../../../containers/Home'

export default {
  title: 'Containers/Home',
}

const itemList = {
  amount: 1900,
  image: 'https://blog-cdn.eduk.com.br/wp-content/uploads/sites/3/2016/08/18130620/hamburguer_shutterstock.jpg',
  title: "Lorem Ipsum is simply dummy",
  subtitle: "Lorem Ipsum is simply dummy text.",
}

const items = range(1, 10).map(item => ({
  id: item,
  ...itemList,
}))


export const Default = () => (
  <HomeContainer
    action={action('Item detail')}
    items={items}
  />
)
