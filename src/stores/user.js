import create from 'zustand'

export const userInitialData = {
  nome: '',
  email: '',
  senha: '',
  idUsuario: '',
}

const useUser = create((set) => ({
  user: userInitialData,
  setUser: (user) => set({ user }),
  logout: () => set({ user: userInitialData }),
}))

export default useUser
