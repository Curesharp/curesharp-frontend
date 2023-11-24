export const getVariant = (variant) => {
  let className

  switch (variant) {
    case 'neutral':
      className = 'bg-white hover:bg-primary-50/10 text-primary-500'

      break
    case 'neutral-danger':
      className = 'bg-white hover:bg-red-50/100 text-red-500'

      break
    case 'outline':
      className =
        'bg-white border border-primary hover:bg-primary-50/10 text-primary'

      break
    case 'danger':
      className = 'bg-red-500 hover:bg-red-600 text-white'
      break
    default:
      className = 'bg-primary hover:bg-primary-600 text-white'

      break
  }

  return className
}
