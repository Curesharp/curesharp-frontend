import React from 'react'
import Header from './components/Header'
import PrivateRoute from '@/utils/auth/PrivateRoute'

const Template = ({ children }) => {
  return (
    <PrivateRoute>
      <Header />
      {children}
    </PrivateRoute>
  )
}

export default Template
