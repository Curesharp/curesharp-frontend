import create from 'zustand'

const usePregnance = create((set) => ({
  pregnance: null,
  setPregnance: (pregnance) => set({ pregnance }),
}))

export default usePregnance
