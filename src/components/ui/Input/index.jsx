import React from 'react'
import { twMerge } from 'tailwind-merge'

const Input = ({ label, onChange, className, ...props }) => {
  return (
    <div className="relative w-full">
      <input
        {...props}
        onChange={onChange}
        className={twMerge(
          'block px-2.5 pb-2.5 pt-4 w-full text-lg text-neutral-600 bg-transparent rounded border appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer',
          className,
        )}
        id="floating_outlined"
        placeholder=" "
      />
      <label
        htmlFor="floating_outlined"
        className="absolute text-md pointer-events-none text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  )
}

export default Input
