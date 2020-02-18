const getInitiais = value => {
  const parsrInitials = value.match(/\b\w/g) || []
  const initials = (
    (parsrInitials.shift() || '')
    + (parsrInitials.pop() || '')
  ).toUpperCase()
  return initials
}

export default getInitiais