import React from 'react'
import { twMerge } from 'tailwind-merge'

const Container = ({ children, className }) => {
  return (
    <div className={twMerge('w-full h-full px-[10vw]', className)}>
      {children}
    </div>
  )
}

export default Container
