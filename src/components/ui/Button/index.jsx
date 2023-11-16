import React from 'react'
import { twMerge } from 'tailwind-merge'
import { getVariant } from './variants'
import { CgSpinner } from 'react-icons/cg'

const Button = ({
  children,
  disabled,
  className,
  variant,
  isLoading,
  icon: Icon,
  ...props
}) => {
  const variantStyles = getVariant(variant)

  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={twMerge(
        `group font-raleway w-full transition-all active:scale-[0.96] ${variantStyles} ${
          Icon ? 'pl-4 pr-3 justify-between' : 'px-8 justify-center'
        } py-2 rounded flex  items-center gap-3`,
        className,
      )}
    >
      {children}

      {Icon && !isLoading && <Icon className="" size={20} />}

      {isLoading && <CgSpinner className="animate-spin" size={20} />}
    </button>
  )
}

export default Button
