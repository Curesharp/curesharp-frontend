'use client'

import Brand from '@/components/shared/Brand'
import { SidebarNavigation } from '@/constants/SidebarNavigation'
import useAnalysis from '@/stores/analysis'
import React from 'react'

const Sidebar = () => {
  const { analysisStep, setAnalysisStep } = useAnalysis()

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
              onClick={() => setAnalysisStep(item.section)}
              key={index}
              className={`${
                item.section === analysisStep &&
                'text-primary bg-primary-50/10 hover:bg-primary-50/20'
              } transition-all active:scale-[0.96] px-4 py-2 text-lg font-semibold text-neutral-600 hover:bg-neutral-100 cursor-pointer rounded`}
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
