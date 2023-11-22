import React from 'react'
import Modal from './components/Modal'

const ModalWrapper = () => {
  return (
    <div className="absolute right-0 top-0 flex justify-center items-center z-40 bg-black/30 backdrop-blur-md h-screen w-screen">
      <div className="animate-scale-in p-2 rounded bg-white">
        <Modal />
      </div>
    </div>
  )
}

export default ModalWrapper
