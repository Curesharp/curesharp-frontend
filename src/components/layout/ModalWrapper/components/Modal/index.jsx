'use client'

import Title from '@/components/ui/Title'
import useModalStore from '@/stores/modal'
import React from 'react'
import { HiX } from 'react-icons/hi'

const Modal = () => {
  const { setModal, modal } = useModalStore()

  return (
    <div className="p-3 min-w-[400px]">
      <header className="flex items-center justify-between mb-6">
        <Title className="text-xl">{modal?.title}</Title>

        <div
          onClick={() => setModal(undefined)}
          className="active:scale-[0.92] p-2 rounded-full cursor-pointer hover:bg-neutral-100 text-neutral-700"
        >
          <HiX size={20} />
        </div>
      </header>
      <div>{modal?.content}</div>
    </div>
  )
}

export default Modal
