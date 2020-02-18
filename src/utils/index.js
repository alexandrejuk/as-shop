import { remove } from 'ramda'

const getInitiais = value => {
  const parsrInitials = value.match(/\b\w/g) || []
  const initials = (
    (parsrInitials.shift() || '')
    + (parsrInitials.pop() || '')
  ).toUpperCase()
  return initials
}

const parserCurrentBR = (value = 0) => {
  if (value === 0) {
    return `R$ 0,00`
  }

  var parserArray = value.toString().split('')
  const size = parserArray.length
  const parserBR = [
    ...remove((size- 2), 2, parserArray),
    `,${parserArray[(size - 2)]}${parserArray[(size - 1)]}`,
  ].join('')

  return `R$ ${parserBR}`
}

export {
  getInitiais,
  parserCurrentBR,
}
