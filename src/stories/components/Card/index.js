import React from 'react'
import { action } from '@storybook/addon-actions'
import { map, range } from 'ramda'

import { Card } from '../../../components'
import styles from './style.module.css'

export default {
  title: 'Components/Card',
}

const cardAction = action('item detail')

const itemList = {
  amount: 1900,
  image: 'https://blog-cdn.eduk.com.br/wp-content/uploads/sites/3/2016/08/18130620/hamburguer_shutterstock.jpg',
  title:"Lorem Ipsum is simply dummy",
  quantity: 10,
  subtitle:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  status: "PAGO",
  data: "10 jan",
  phone: "(11) 9 6503-5205",
}

const lists = range(1, 5).map(item => ({
  id: item,
  ...itemList,
}))

const item = item => (
  <div
    className={styles.item}
    key={item.id}
  >
    <Card
      {...item}
      action={cardAction}
    />
  </div>
)

const itemType = type => item => ({
  ...item,
  type,
  subtitle: 'São Paulo - SP',
})


export const Contact = () => (
  <div className={styles.container}>
    {
      map(
        item,
        map(
          itemType('contact'),
          lists,
        ),
      )
    }
  </div>
)

export const Product = () => (
  <div className={styles.container}>
    {
      map(item, map(itemType('product'), lists))
    }
  </div>
)

export const Seller = () => (
  <div className={styles.container}>
    {
      map(item, map(itemType('seller'), lists))
    }
  </div>
)
