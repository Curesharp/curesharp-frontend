import React from 'react'
import { twMerge } from 'tailwind-merge'

const AuthCard = ({ children, className }) => {
  return (
    <div className={twMerge('p-7 border rounded max-w-[440px]', className)}>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  )
}

export default AuthCard
