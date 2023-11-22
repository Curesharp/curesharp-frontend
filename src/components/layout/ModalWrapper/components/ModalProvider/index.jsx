'use client'

import useModalStore from '@/stores/modal'
import React, { useEffect } from 'react'
import ModalWrapper from '../..'

const ModalProvider = ({ children }) => {
  const { modal } = useModalStore()

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [modal])

  return (
    <>
      {modal && <ModalWrapper />}
      {children}
    </>
  )
}

export default ModalProvider
