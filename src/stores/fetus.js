import create from 'zustand'

const useFetus = create((set) => ({
  fetus: null,
  setFetus: (fetus) => set({ fetus }),
}))

export default useFetus
