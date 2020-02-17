import React from 'react'
import { map } from 'ramda'
import { Badge } from '../../../components'
import styles from './style.module.css'

export default {
  title: 'Components/Badge',
}

const badges = [
  'danube',
  'chestnutRose'
]

const badge = color => (
  <div className={styles.item}>
    <Badge
      color={color}
      text="text"
    />
  </div>
)

export const Default = () => map(badge, badges)
