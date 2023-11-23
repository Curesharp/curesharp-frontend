import create from 'zustand'

export const pregnanceInitialData = null

const usePregnance = create((set) => ({
  pregnance: pregnanceInitialData,
  setPregnance: (pregnance) => set({ pregnance }),
}))

export default usePregnance
