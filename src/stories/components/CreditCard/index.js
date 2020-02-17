import React from 'react'
import { CreditCard } from '../../../components'

export default {
  title: 'Components/CreditCard',
}

const creditCard = {
  cardValid: '10/20',
  cardHolderName: 'Alexandre S Soares',
  cardNumber: '4200 1234 9900 0000',
}

export const Default = () => (
  <CreditCard
    {...creditCard}
  />
)
