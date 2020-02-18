import React from 'react'
import { map } from 'ramda'

import { Title } from '../../../components'
import styles from './style.module.css'

export default {
  title: 'Components/Title',
}

const titles = [
  {
    text: 'Your xsmall title here!',
    size: 'xsmall',
  },
  {
    text: 'Your small title here!',
    size: 'small',
  },
  {
    text: 'Your medium title here!',
    size: 'medium',
  },
  {
    text: 'Your big title here!',
    size: 'big',
  },
  {
    text: 'Your large title here!',
    size: 'large',
  },
]

const titleItem = title => (
  <div
    className={styles.item}
    key={title.text}
  >
    <Title {...title} />
  </div>
)

const scorpion = title => ({ ...title, color: 'scorpion' })
const white = title => ({ ...title, color: 'white' })
const bold = title => ({ ...title, type: 'bold' })

export const Default = () => map(titleItem, titles)

export const Bold = () => map(titleItem, map(bold, titles))

export const ColorScorpion = () => map(titleItem, map(scorpion, titles))

export const ColorWhite = () => (
  <div className={styles.container}>
    {map(titleItem, map(white, titles))}
  </div>
)
