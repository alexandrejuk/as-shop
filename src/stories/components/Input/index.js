import React from 'react'

import { Input } from '../../../components'

export default {
  title: 'Components/Input',
}

const inputProps = {
  name: 'fullname',
  placeholder: 'Nome completo',
  type: 'text',
  value: '',
}

export const Default = () => (
  <Input
    {...inputProps}
  />
)

export const Disabled = () => (
  <Input
    {...inputProps}
    disabled={true}
  />
)


export const Invalid = () => (
  <Input
    type='email'
    placeholder='Email'
    name='email'
  />
)

