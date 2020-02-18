import React from 'react'
import { action } from '@storybook/addon-actions'

import { List } from '../../../components'
import DoneIcon from '../../../assets/icons/done.svg'
import StaticIcon from '../../../assets/icons/static.svg'

export default {
  title: 'Components/List',
}

const ListAction = action('List item')

const ListItems = [
  {
    icon: StaticIcon,
    subtitle:"Lorem Ipsum is simply dummy text.",
    title:"Lorem Ipsum is simply dummy",
  },
  {
    icon: DoneIcon,
    subtitle:"Lorem Ipsum is simply dummy text.",
    title:"Lorem Ipsum is simply dummy",
  }
]

export const Default = () => (
  <List
    items={ListItems}
    action={ListAction}
  />
)
