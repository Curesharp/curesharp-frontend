'use client'

import useModalStore from '@/stores/modal'
import React from 'react'
import ModalWrapper from '../..'

const ModalProvider = ({ children }) => {
  const { modal } = useModalStore()

  return (
    <>
      {modal && <ModalWrapper />}
      {children}
    </>
  )
}

export default ModalProvider
