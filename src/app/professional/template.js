import React from 'react'
import Header from '../(root)/components/Header'
import Footer from '../(root)/components/Footer'

const Template = ({ children }) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Template