import React from 'react'
import { action } from '@storybook/addon-actions'
import ProductDetailContainer from '../../../containers/ProductDetail'

export default {
  title: 'Containers/ProductDetail',
}

const product = {
  amount: 1900,
  id: 1,
  images: [
    'https://blog-cdn.eduk.com.br/wp-content/uploads/sites/3/2016/08/18130620/hamburguer_shutterstock.jpg',
    'https://blog-cdn.eduk.com.br/wp-content/uploads/sites/3/2016/08/18130620/hamburguer_shutterstock.jpg',
    'https://blog-cdn.eduk.com.br/wp-content/uploads/sites/3/2016/08/18130620/hamburguer_shutterstock.jpg',
  ],
  title: "Lorem Ipsum is simply dummy",
  subtitle: "Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.Lorem Ipsum is simply dummy text.",
}

export const Default = () => (
  <ProductDetailContainer
    addCart={action('add to cart')}
    goBack={action('go back')}
    product={product}
  />
)
