import React from "react";
import { twMerge } from "tailwind-merge";

const Input = ({ label, onChange, className, ...props }) => {
  return (
    <div className="relative">
      <input
        {...props}
        onChange={onChange}
        className={twMerge(
          "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded border appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer",
          className
        )}
        type="text"
        id="floating_outlined"
        placeholder=" "
      />
      <label
        htmlFor="floating_outlined"
        className="absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
