import create from 'zustand'

const useModal = create((set) => ({
  modal: undefined,
  setModal: (modalData) => set({ modal: modalData }),
}))

export default useModal
