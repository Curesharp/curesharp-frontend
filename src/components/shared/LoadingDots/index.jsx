const LoadingDots = ({ variant }) => {
  let style

  switch (variant) {
    case 'primary':
      style = 'bg-primary'
      break
    default:
      style = 'bg-white'
      break
  }

  return (
    <div className="flex space-x-2 justify-center items-center">
      <div
        className={`h-4 w-4 ${style} rounded-full animate-bounce [animation-delay:-0.3s]`}
      ></div>
      <div
        className={`h-4 w-4 ${style} rounded-full animate-bounce [animation-delay:-0.15s]`}
      ></div>
      <div className={`h-4 w-4 ${style} rounded-full animate-bounce`}></div>
    </div>
  )
}

export default LoadingDots
