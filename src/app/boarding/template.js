import React from 'react'
import Header from './components/Header'
import PrivateRoute from '@/utils/auth/PrivateRoute'

const Template = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Template
