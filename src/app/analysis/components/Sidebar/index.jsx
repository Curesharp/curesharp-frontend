import Brand from '@/components/shared/Brand'
import { SidebarNavigation } from '@/constants/SidebarNavigation'
import React from 'react'

const Sidebar = () => {
  return (
    <aside className="sticky z-20 top-0 border-r shadow min-w-[300px] h-screen">
      <header className="p-4">
        <div className="w-[220px]">
          <Brand />
        </div>
      </header>
      <nav className="p-4">
        <ul className="flex flex-col gap-4">
          {SidebarNavigation.map((item, index) => (
            <li
              key={index}
              className="transition-all active:scale-[0.96] px-4 py-2 text-lg font-semibold bg-neutral-100 text-neutral-600 cursor-pointer rounded"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
