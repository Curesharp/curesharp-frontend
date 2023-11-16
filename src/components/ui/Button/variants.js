export const getVariant = (variant) => {
  let className

  switch (variant) {
    case 'neutral':
      className = 'bg-white hover:bg-neutral-50 text-neutral-700'

      break
    case 'outline':
      className =
        'bg-white border border-primary hover:bg-primary-50/10 text-primary'

      break
    default:
      className = 'bg-primary hover:bg-primary-600 text-white'

      break
  }

  return className
}
