import React from 'react'
import Sidebar from './components/Sidebar'

const Template = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      {children}
    </div>
  )
}

export default Template
