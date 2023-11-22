import React, { useState } from 'react'
import { HiCheck, HiChevronDown } from 'react-icons/hi'
import Text from '../Text'

const SelectMenu = ({ label, menu, onChange, defaultOption }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [menuSelectedItem, setMenuSelectedItem] = useState(defaultOption)

  return (
    <div className="w-full relative">
      <div className="w-full relative">
        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="transition-all group active:scale-[0.98] w-full relative flex items-center cursor-pointer"
        >
          {label && (
            <Text
              className={`${
                isMenuOpen ? 'text-primary' : 'text-gray-500'
              } absolute z-10 px-2 -left-[3px] bg-white -top-[8px] scale-75`}
            >
              {label}
            </Text>
          )}

          <div
            className={`transition-all block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded ${
              isMenuOpen ? 'border border-primary' : 'border'
            } appearance-none dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer`}
          >
            <Text>{menuSelectedItem.label}</Text>
          </div>
          <div className="transition-all group-hover:bg-neutral-100 group-active:scale-[0.92] rounded-full p-1 absolute right-2 text-primary">
            <HiChevronDown
              className={`transition-all ${
                isMenuOpen ? 'rotate-180' : 'rotate-0'
              }`}
              size={22}
            />
          </div>
        </div>
      </div>

      {/* Menu */}
      {isMenuOpen && (
        <div className="shadow animate-scale-in absolute z-20 w-full bg-white border rounded mt-2">
          <ul>
            {menu.map((item) => (
              <>
                {menuSelectedItem?.id !== item.id && (
                  <li
                    onClick={() => {
                      onChange && onChange(item)
                      setMenuSelectedItem(item)
                      setIsMenuOpen(false)
                    }}
                    className="group text-md text-neutral-700 flex items-center relative justify-between whitespace-nowrap p-2 overflow-hidden hover:bg-neutral-100 cursor-pointer"
                  >
                    {item.label}
                    {item.id === menuSelectedItem.id && (
                      <div className="absolute right-0 text-primary p-2 bg-white group-hover:bg-neutral-100">
                        <HiCheck size={16} />
                      </div>
                    )}
                  </li>
                )}
              </>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SelectMenu
