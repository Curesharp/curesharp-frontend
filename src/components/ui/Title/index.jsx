import React from 'react'
import { twMerge } from 'tailwind-merge'

const Title = ({ children, className }) => {
  return (
    <h3 className={twMerge('text-xl font-raleway text-neutral-800', className)}>
      {children}
    </h3>
  )
}

export default Title
